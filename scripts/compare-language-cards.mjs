import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cardsPath = path.join(repoRoot, 'src', 'data', 'cards.js');
const defaultLanguagePath =
	'd:/Steam/steamapps/common/Shotgun King The Final Checkmate/lang/english.txt';
const languagePath = process.argv[2] ?? defaultLanguagePath;

const manualAliases = new Map([
	['Faithful Steed', 'Unfaithful Steed'],
	['Sawed-off Justice', 'Sawed-Off Justice'],
	['Force-Feeding', 'Force Feeding'],
	["King's Look-alike", "King's Look-Alike"],
	['Self-Defense', 'Self Defense'],
]);

function normalizeName(value) {
	return value
		.toLowerCase()
		.replace(/['’.]/g, '')
		.replace(/-/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
}

function readRepoCards(filePath) {
	const source = fs.readFileSync(filePath, 'utf8');
	const match = source.match(/export const allCards = \[(.*?)\];/s);

	if (!match) {
		throw new Error('Could not find `allCards` array in src/data/cards.js');
	}

	return Function(`return [${match[1]}];`)();
}

function readLanguageCards(filePath) {
	const source = fs.readFileSync(filePath, 'utf8');
	const start = source.indexOf('-- CARD NAMES');
	const end = source.indexOf('-- CARDS DYNAMIC');

	if (start === -1 || end === -1 || end <= start) {
		throw new Error('Could not find card-name section in language file');
	}

	return source
		.slice(start, end)
		.split(/\r?\n/)
		.map((line) => line.trim())
		.filter((line) => line && !line.startsWith('--') && line.includes('::'))
		.map((line) => line.split('::')[1].trim());
}

const repoCards = readRepoCards(cardsPath);
const languageCards = readLanguageCards(languagePath);
const repoSet = new Set(repoCards);
const normalizedRepo = new Map(repoCards.map((name) => [normalizeName(name), name]));

const likelyAliases = [];
const brandNewCards = [];

for (const name of languageCards) {
	if (repoSet.has(name)) {
		continue;
	}

	const manualMatch = manualAliases.get(name);
	if (manualMatch) {
		likelyAliases.push({ languageName: name, repoName: manualMatch, source: 'manual' });
		continue;
	}

	const normalizedMatch = normalizedRepo.get(normalizeName(name));
	if (normalizedMatch) {
		likelyAliases.push({
			languageName: name,
			repoName: normalizedMatch,
			source: 'normalized',
		});
		continue;
	}

	brandNewCards.push(name);
}

const aliasTargets = new Set(likelyAliases.map(({ repoName }) => repoName));
const repoOnlyCards = repoCards.filter(
	(name) => !languageCards.includes(name) && !aliasTargets.has(name)
);

console.log(
	JSON.stringify(
		{
			languagePath,
			languageCardCount: languageCards.length,
			repoCardCount: repoCards.length,
			likelyAliases,
			brandNewCards,
			repoOnlyCards,
		},
		null,
		2
	)
);
