// All available cards in the game with detailed information
const allCards = [
    "A Piercing Truth", "August Presence", 
];

// Function to get local image path for a card
function getLocalImagePath(cardName) {
    const imageMap = {
        "Ancient Flagstone": "Ancient_flagstone.png",
        "A Piercing Truth": "A_Piercing_Truth.png",
        "August Presence": "August_Presence.png",
        "Black Mist": "Black_Mist.png",
        "Blunderbuss": "Blunderbuss.png",
        "Cornered Despot": "Cornered_Despot.png",
        "Courteous Jousting": "Courteous_Jousting.png",
        "Crow's Blessing": "Crow's_Blessing.png",
        "Elite Gem": "Elite_Gem.png",
        "Engraved Scope": "Engraved_Scope.png",
        "Ermine Belt": "Ermine_Belt.png",
        "Extra Barrel": "Extra_Barrel.png",
        "Gradual Absolution": "Gradual_Absolution.png",
        "High Focus": "High_Focus.png",
        "Holy Gunpowder": "Holy_Gunpowder.png",
        "King's Shoulders": "King's_Shoulders.png",
        "Kingdom Wealth": "Kingdom_Wealth.png",
        "Kingly Alms": "Kingly_Alms.png",
        "Majestic Censer": "Majestic_Censer.png",
        "Rightful Curtsy": "Rightful_Curtsy.png",
        "Ritual Dagger": "Ritual_Dagger.png",
        "Royal Loafers": "Royal_Loafers.png",
        "Sacred Crown": "Sacred_Crown.png",
        "Small Fry Harvest": "Small_Fry_Harvest.png",
        "Subtle Poison": "Subtle_Poison.png",
        "The Moat": "The_Moat.png",
        "Unfaithful Steed": "Unfaithful_Steed.png",
        "Unjust Decree": "Unjust_Decree.png",
        "Wand of Downpour": "Wand_of_Downpour.png",
        "Wand of Frenzy": "Wand_of_Frenzy.png",
        "Wand of Gust": "Wand_of_Gust.png",
        "Wand of Wings": "Wand_of_Wings.png",
        "Wand of Wrath": "Wand_of_Wrath.png",
        "Wand of Souls": "Wand_of_Souls.png",
        "Wand of Execution": "Wand_of_Execution.png",
        "Wand Of Hypnosis": "WandofHypnosis.png",
        "Sawed-Off Justice": "Sawed-Off_Justice.png",
        "Welcome Gift": "Welcome_Gift.png",
        "Cannon Fodder": "Cannon_Fodder.png",
        "Philanthropy": "Philanthropy.png",
        "Sacred Light": "Sacred_Light.png",
        "Ravenous Rats": "Ravenous_Rats.png",
        "Unholy Call": "Unholy_Call.png",
        "Undercover Mission": "Undercover_Mission.png",
        "Caltrops": "Caltrops2.png",
        "Nightbane": "Nightbane.png",
        "Bushido": "Bushido.png",
        "Bloodless Coup": "Bloodless_Coup.png",
        "Presbyopia": "Presbyopia.png",
        "Golden Aging": "GoldenAging.png",
        "Fool Companion": "FoolCompanion.png",
        "Force Feeding": "Forcefeeding.png",
        "Possessed": "Possessed.png",
        "Imperial Shot Put": "Imperial_Shot_Put.png",
        "Church Organ": "Church_Organ.jpg",
        "Black Plague": "Plague.PNG",
        "Deep Waters": "Deep_Waters.jpg",
        "Indelible Memories": "Indelible_memories.png",
        "Monarch's Confidence": "Monarch_E2_80_99s_Confidence.jpg",
        "Tearing Bullets": "Tearing_Bullets.jpg",
        "The Mole": "The_mole.png",
        "Fearsome": "Fearsome.png",
        "Human Shield": "Human_shield.png",
        "Reign of Terror": "Reign_of_terror.png",
        "Patience": "Black_Patience_Card.png",
        "Bold Plan": "Bold_Plan.jpg",
        "Low-Cost Disguise": "Low_Cost_Disguise.jpg",
        "Silencer": "Silencer.jpg",
        "Holoking": "Holo-King.jpg",
        "Cloaking Device": "Cloaking_Device.png",
        "Ambush": "Ambush.png",
        "Selective Listening": "Selective_Listening.jpg",
        "Secret Move": "Secret_move.png",
        "Workshop": "Workshop.png",
        "Seer's Orb": "Seer_E2_80_99s_Orb.jpg",
        "Ammunition Depot": "Ammunition_Depot.png",
        "Ascension": "Ascension.png",
        "Assault": "Assault.png",
        "Backups": "Backups.png",
        "Bodyguard": "Bodyguard.png",
        "Cardinal": "Cardinal.png",
        "Castle": "Castle.png",
        "Cavalry": "Cavalry.png",
        "Conclave": "Conclave.png",
        "Conscription": "Conscription.png",
        "Court of the King": "Court_of_the_King.png",
        "Crusades": "Crusades.png",
        "Entitle": "Entitle.png",
        "Drag Queen": "Crossdresser.png",
        "Homecoming": "Homecoming.png",
        "Tragic Homecoming": "Tragic_Homecoming.png",
        "Iron Maiden": "Iron_Maiden.png",
        "King's Mistress": "King_27s_Mistress.png",
        "Kite Shield": "Kite_Shield.png",
        "Lookout Tower": "Lookout_Tower.png",
        "Militia": "Militia.png",
        "Peace": "Peace.png",
        "Pikemen": "Pikemen.png",
        "Pillage": "Pillage.png",
        "Remparts": "Remparts.png",
        "Revolution": "Revolution.png",
        "Ruins": "Ruins.png",
        "Saboteur": "Saboteur.png",
        "Scouting": "Scouting.png",
        "The Red Book": "The_Red_Book.png",
        "The Secret Heir": "The_Secret_Heir.png",
        "Theocracy": "Theocracy.png",
        "Throne Room": "Throne_Room.png",
        "Zealots": "Zealots.png",
        "Karma": "Karma1.jpg",
        "Undead Armies": "Undead_Armies.png",
        "Shortage": "Shortage.png",
        "Succubus": "Succubus.png",
        "Cathedral": "Cathedral_Card.jpg",
        "Sanctity": "Sanctity.png",
        "Knightmare": "Knigtmare.png",
        "Highest Dungeon": "HighestDungeon.png",
        "Bunker": "Bunker.jpg",
        "The Bridge": "TheBridge.png",
        "Divine Healing": "DivineHealing.png",
        "Last Guardian": "LastGuardian.png",
        "Trowel": "Trowel.png",
        "Full Plate Armor": "FullPlateArmor.png",
        "Military Academy": "MilitaryAcademy.png",
        "Witch's Curse": "WitchCurse.png",
        "Saddle": "Saddle.png",
        "The Jester": "The_Jester.png",
        "Guillotine": "Guillotine.png",
        "Analysis Paralysis": "Analysis_Paralysis_1.jpg",
        "Mausoleum": "Mausoleum.jpg",
        "Final Countdown": "Final_Countdown.jpg",
        "Mangonel": "Mangonel_.jpg",
        "Prison": "Prison.png",
        "The Royal Hunt": "The_Royal_Hunt.jpg",
        "Buckler of Limos": "Buckler_of_Limos.png",
        "King's Look-Alike": "King's_Look-Alike.png",
        "Emergency Call": "Emergency_Call.jpg",
        "Lady in the Tower": "Lady_in_the_Tower.png",
        "Vampirism": "Vampirism.png",
        "Inquisition": "Inquisition.png",
        "Tag Team": "Tag_Team.jpg",
        "Unsettled Throne": "Unsettled_throne.png",
        "Nomad Life": "Nomad_Life.jpg",
        "Governess": "Governess.jpg",
        "Unicorn": "Unicorn.jpg",
        "Plumed Knight": "Plumed_Knight.jpg",
        "Reverend Mother": "Reverend_mother.png",
        "Commoner's Reign": "Commoner's_Reign.png",
        "Self Defense": "Self_Defense.png",
        "Bouncy Castle": "Bouncy_castle.png",
        "Sokoban": "Sokoban.png",
        "Stealthy": "Stealthy.jpg"
    };
    
    const imageName = imageMap[cardName];
    if (imageName) {
        return `images/${imageName}`;
    }
    
    // Fallback to a default image if not found
    return "`images/Image_missing.png";
}

const cardDetails = {
    "Ancient Flagstone": {
        image: getLocalImagePath("Ancient Flagstone"),
        description: "Adds a Flagstone to the board. You can always move to this square no matter how far you are from it",
        maxAmount: 2,
        requirements: ""
    },
    "A Piercing Truth": {
        image: getLocalImagePath("A Piercing Truth"),
        description: "Your bullets have a 30% chance to pierce through targets",
        maxAmount: 2,
        requirements: ""
    },
};

const achievements = [
    {
        id: "boundaries",
        title: "Boundaries",
        description: "Win with Rightful Curtsy, Rightful Curtsy and The Moat",
        progress: 0,
        maxProgress: 1,
        completed: false,
        requiredCards: ["Rightful Curtsy", "Rightful Curtsy", "The Moat"],
        difficulty: "Medium"
    },
    {
        id: "demolition",
        title: "Demolition",
        description: "Win with Ruins, Pillage and Kingly Alms",
        progress: 0,
        maxProgress: 1,
        completed: false,
        requiredCards: ["Ruins", "Pillage", "Kingly Alms"],
        difficulty: "Hard"}
];
// Selected cards array (now supports duplicates)
let selectedCards = [];

// Card recommendations database


// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    console.log('Achievements available:', achievements ? achievements.length : 'undefined');
    console.log('All Cards available:', allCards ? allCards.length : 'undefined');
    console.log('Card Details available:', cardDetails ? Object.keys(cardDetails).length : 'undefined');
    
    // Load saved progress first
    loadProgress();
    initializeApp();
});

function initializeApp() {
    loadAchievements();
    setupEventListeners();
    updateStats();
    initializeCardSelection();
}

function initializeCardSelection() {
    console.log('Initializing card selection...');
    console.log('All Cards array:', allCards);
    
    const cardGrid = document.getElementById('card-grid');
    if (!cardGrid) {
        console.error('Card grid not found!');
        return;
    }
    
    cardGrid.innerHTML = '';

    if (!achievements || !Array.isArray(achievements)) {
        console.error('Achievements is not an array in initializeCardSelection:', achievements);
        return;
    }

    if (!allCards || !Array.isArray(allCards)) {
        console.error('All Cards is not an array:', allCards);
        return;
    }

    // Collect all cards required for at least one locked achievement
    const lockedRequiredCards = new Set();
    achievements.forEach(achievement => {
        if (!achievement.completed && Array.isArray(achievement.requiredCards)) {
            achievement.requiredCards.forEach(card => lockedRequiredCards.add(card));
        }
    });

    console.log('Locked required cards:', Array.from(lockedRequiredCards));

    // Only show cards that are required for a locked achievement
    const filteredCards = allCards.filter(card => lockedRequiredCards.has(card));
    console.log('Filtered cards:', filteredCards);

    filteredCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card-item';
        cardElement.dataset.card = card;
        
        // Get card details if available
        const details = cardDetails[card] || {};
        
        // Create card content with image and details
        cardElement.innerHTML = `
            <div class="card-image">
                ${details.image ? `<img src="${details.image}" alt="${card}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMzMzMzMzIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNjY2NjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Q2FyZAo8L3RleHQ+Cjwvc3ZnPgo='; this.onerror=null;">` : `<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMzMzMzMzIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNjY2NjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Q2FyZAo8L3RleHQ+Cjwvc3ZnPgo=" alt="${card}">`}
            </div>
            <div class="card-info">
                <div class="card-name">${card}</div>
                ${details.description ? `<div class="card-description">${details.description}</div>` : ''}
                ${details.maxAmount ? `<div class="card-max">Max: ${details.maxAmount}</div>` : ''}
                ${details.requirements ? `<div class="card-requirements">Requires: ${details.requirements}</div>` : ''}
            </div>
        `;
        
        cardElement.addEventListener('click', () => {
            toggleCardSelection(card);
        });
        
        // Right-click to remove cards
        cardElement.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            removeCardSelection(card);
        });
        
        cardGrid.appendChild(cardElement);
    });

    updateSelectedCardsCount();
    updateQualifyingAchievements();
    updateMissingCardsSummary();
    
    // Set initial visible cards count
    const visibleCountElement = document.getElementById('visible-cards-count');
    visibleCountElement.textContent = filteredCards.length;
}

function toggleCardSelection(card) {
    const cardElement = document.querySelector(`[data-card="${card}"]`);
    const currentCount = selectedCards.filter(c => c === card).length;
    
    // Always add another instance if under 20 limit
    if (selectedCards.length < 20) {
        selectedCards.push(card);
        const newCount = selectedCards.filter(c => c === card).length;
        updateCardVisualState(cardElement, newCount);
    }
    
    // Update UI
    updateSelectedCardsCount();
    updateQualifyingAchievements();
    updateMissingCardsSummary();
    updateCardGridState();
}

function updateCardVisualState(cardElement, selectedCount) {
    // Remove existing classes
    cardElement.classList.remove('selected', 'selected-2', 'selected-3', 'selected-4', 'selected-5');
    
    if (selectedCount > 0) {
        cardElement.classList.add('selected');
        if (selectedCount > 1) {
            cardElement.classList.add(`selected-${Math.min(selectedCount, 5)}`);
        }
        
        // Update the card name to show count
        const cardNameElement = cardElement.querySelector('.card-name');
        if (cardNameElement) {
            const card = cardElement.dataset.card;
            const originalText = cardNameElement.dataset.originalText || card;
            if (!cardNameElement.dataset.originalText) {
                cardNameElement.dataset.originalText = originalText;
            }
            
            if (selectedCount > 1) {
                cardNameElement.textContent = `${originalText} (${selectedCount})`;
            } else {
                cardNameElement.textContent = originalText;
            }
        }
    } else {
        const cardNameElement = cardElement.querySelector('.card-name');
        if (cardNameElement) {
            const originalText = cardNameElement.dataset.originalText || cardElement.dataset.card;
            cardNameElement.textContent = originalText;
        }
    }
}

function updateSelectedCardsCount() {
    const countElement = document.getElementById('selected-cards-count');
    countElement.textContent = selectedCards.length;
}

function updateCardGridState() {
    const cardElements = document.querySelectorAll('.card-item');
    
    cardElements.forEach(element => {
        const card = element.dataset.card;
        const isSelected = selectedCards.includes(card);
        const isAtLimit = selectedCards.length >= 20;
        const isNotSelected = !isSelected;
        
        if (isAtLimit && isNotSelected) {
            element.classList.add('disabled');
        } else {
            element.classList.remove('disabled');
        }
    });
}

function removeCardSelection(card) {
    const cardElement = document.querySelector(`[data-card="${card}"]`);
    const currentCount = selectedCards.filter(c => c === card).length;
    
    if (currentCount > 0) {
        // Remove one instance of the card from selection
        const index = selectedCards.lastIndexOf(card);
        selectedCards.splice(index, 1);
        
        // Update visual state
        const newCount = selectedCards.filter(c => c === card).length;
        updateCardVisualState(cardElement, newCount);
        
        // Update UI
        updateSelectedCardsCount();
        updateQualifyingAchievements();
        updateMissingCardsSummary();
        updateCardGridState();
    }
}

function updateQualifyingAchievements() {
    const qualifyingContainer = document.getElementById('qualifying-achievements');
    
    if (selectedCards.length === 0) {
        qualifyingContainer.innerHTML = '<p class="no-cards-message">Select cards to see qualifying achievements</p>';
        return;
    }
    
    const qualifyingAchievements = getQualifyingAchievements();
    
    if (qualifyingAchievements.length === 0) {
        qualifyingContainer.innerHTML = '<p class="no-cards-message">No qualifying achievements with your selected cards</p>';
        return;
    }
    
    qualifyingContainer.innerHTML = '';
    
    qualifyingAchievements.forEach(achievement => {
        const achievementElement = document.createElement('div');
        achievementElement.className = 'qualifying-achievement';
        
        // Create achievement title
        const titleElement = document.createElement('div');
        titleElement.className = 'qualifying-achievement-title';
        titleElement.textContent = achievement.title;
        titleElement.title = achievement.description;
        
        // Create required cards display with highlighting
        const cardsElement = document.createElement('div');
        cardsElement.className = 'qualifying-achievement-cards';
        
        // Count required cards
        const requiredCardCounts = {};
        achievement.requiredCards.forEach(card => {
            requiredCardCounts[card] = (requiredCardCounts[card] || 0) + 1;
        });
        
        // Count selected cards
        const selectedCardCounts = {};
        selectedCards.forEach(card => {
            selectedCardCounts[card] = (selectedCardCounts[card] || 0) + 1;
        });
        
        // Create missing cards summary
        const missingCards = [];
        const partialCards = [];
        const completeCards = [];
        
        Object.entries(requiredCardCounts).forEach(([card, requiredCount]) => {
            const selectedCount = selectedCardCounts[card] || 0;
            
            if (selectedCount >= requiredCount) {
                completeCards.push(`${card} (${selectedCount}/${requiredCount})`);
            } else if (selectedCount > 0) {
                partialCards.push(`${card} (${selectedCount}/${requiredCount})`);
            } else {
                missingCards.push(`${card} (${requiredCount} needed)`);
            }
        });
        
        // Create summary section
        const summaryElement = document.createElement('div');
        summaryElement.className = 'achievement-summary';
        
        if (completeCards.length > 0) {
            const completeElement = document.createElement('div');
            completeElement.className = 'summary-section complete';
            completeElement.innerHTML = `<strong>✓ Complete:</strong> ${completeCards.join(', ')}`;
            summaryElement.appendChild(completeElement);
        }
        
        if (partialCards.length > 0) {
            const partialElement = document.createElement('div');
            partialElement.className = 'summary-section partial';
            partialElement.innerHTML = `<strong>⚠ Partial:</strong> ${partialCards.join(', ')}`;
            summaryElement.appendChild(partialElement);
        }
        
        if (missingCards.length > 0) {
            const missingElement = document.createElement('div');
            missingElement.className = 'summary-section missing';
            missingElement.innerHTML = `<strong>○ Missing:</strong> ${missingCards.join(', ')}`;
            summaryElement.appendChild(missingElement);
        }
        
        // Display each unique required card with count (detailed view)
        Object.entries(requiredCardCounts).forEach(([card, requiredCount]) => {
            const cardElement = document.createElement('span');
            cardElement.className = 'qualifying-card-tag';
            
            const selectedCount = selectedCardCounts[card] || 0;
            
            if (selectedCount >= requiredCount) {
                cardElement.classList.add('selected');
                cardElement.textContent = `✓ ${card} (${selectedCount}/${requiredCount})`;
            } else if (selectedCount > 0) {
                cardElement.classList.add('partial');
                cardElement.textContent = `⚠ ${card} (${selectedCount}/${requiredCount})`;
            } else {
                cardElement.classList.add('missing');
                cardElement.textContent = `○ ${card} (0/${requiredCount})`;
            }
            
            cardsElement.appendChild(cardElement);
        });
        
        achievementElement.appendChild(titleElement);
        achievementElement.appendChild(summaryElement);
        achievementElement.appendChild(cardsElement);
        
        achievementElement.addEventListener('click', () => {
            // Scroll to the achievement in the main list
            const achievementCard = document.querySelector(`[data-achievement-id="${achievement.id}"]`);
            if (achievementCard) {
                achievementCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                achievementCard.style.animation = 'pulse 1s ease-in-out';
                setTimeout(() => {
                    achievementCard.style.animation = '';
                }, 1000);
            }
        });
        
        qualifyingContainer.appendChild(achievementElement);
    });
}

function getQualifyingAchievements() {
    const qualifying = [];
    
    achievements.forEach(achievement => {
        // Skip achievements that are already completed
        if (achievement.completed) {
            return;
        }
        
        if (achievement.requiredCards && achievement.requiredCards.length > 0) {
            // Check if any of the required cards are selected
            const hasAnyRequiredCard = achievement.requiredCards.some(card => 
                selectedCards.includes(card)
            );
            
            if (hasAnyRequiredCard) {
                qualifying.push(achievement);
            }
        }
    });
    
    return qualifying;
}

function updateMissingCardsSummary() {
    const missingContainer = document.getElementById('missing-cards-summary');
    
    if (selectedCards.length === 0) {
        missingContainer.innerHTML = '<p class="no-cards-message">Select cards to see what you\'re missing</p>';
        return;
    }
    
    const qualifyingAchievements = getQualifyingAchievements();
    
    if (qualifyingAchievements.length === 0) {
        missingContainer.innerHTML = '<p class="no-cards-message">No qualifying achievements with your selected cards</p>';
        return;
    }
    
    // Collect all missing cards across all qualifying achievements
    const missingCards = {};
    const selectedCardCounts = {};
    
    // Count selected cards
    selectedCards.forEach(card => {
        selectedCardCounts[card] = (selectedCardCounts[card] || 0) + 1;
    });
    
    // Check each qualifying achievement for missing cards
    qualifyingAchievements.forEach(achievement => {
        const requiredCardCounts = {};
        achievement.requiredCards.forEach(card => {
            requiredCardCounts[card] = (requiredCardCounts[card] || 0) + 1;
        });
        
        Object.entries(requiredCardCounts).forEach(([card, requiredCount]) => {
            const selectedCount = selectedCardCounts[card] || 0;
            const missingCount = Math.max(0, requiredCount - selectedCount);
            
            if (missingCount > 0) {
                if (!missingCards[card]) {
                    missingCards[card] = 0;
                }
                missingCards[card] = Math.max(missingCards[card], missingCount);
            }
        });
    });
    
    if (Object.keys(missingCards).length === 0) {
        missingContainer.innerHTML = '<p class="no-cards-message">All required cards are selected!</p>';
        return;
    }
    
    // Create missing cards display
    const missingCardsList = Object.entries(missingCards)
        .sort(([,a], [,b]) => b - a) // Sort by count descending
        .map(([card, count]) => `<span class="missing-card-tag">${card} (${count} more needed)</span>`)
        .join('');
    
    missingContainer.innerHTML = `
        <div class="missing-cards-display">
            ${missingCardsList}
        </div>
    `;
}

function clearCardSelection() {
    selectedCards = [];
    const cardElements = document.querySelectorAll('.card-item');
    cardElements.forEach(element => {
        element.classList.remove('selected', 'selected-2', 'selected-3', 'selected-4', 'selected-5', 'disabled');
        const cardNameElement = element.querySelector('.card-name');
        if (cardNameElement) {
            cardNameElement.textContent = cardNameElement.dataset.originalText || element.dataset.card;
        }
    });
    
    updateSelectedCardsCount();
    updateQualifyingAchievements();
    updateMissingCardsSummary();
}

function filterCards() {
    const searchTerm = document.getElementById('card-search-input').value.toLowerCase();
    const cardElements = document.querySelectorAll('.card-item');
    let visibleCount = 0;

    cardElements.forEach(element => {
        const cardName = element.dataset.card.toLowerCase();
        const cardNameElement = element.querySelector('.card-name');
        const cardNameText = cardNameElement ? cardNameElement.textContent.toLowerCase() : cardName;
        const matchesSearch = cardNameText.includes(searchTerm);
        
        if (matchesSearch) {
            element.classList.remove('hidden');
            visibleCount++;
        } else {
            element.classList.add('hidden');
        }
    });

    // Update visible cards count
    const visibleCountElement = document.getElementById('visible-cards-count');
    visibleCountElement.textContent = visibleCount;
}

function loadAchievements() {
    console.log('Loading achievements...');
    console.log('Achievements array:', achievements);
    
    const container = document.getElementById('achievements-container');
    if (!container) {
        console.error('Achievements container not found!');
        return;
    }
    
    container.innerHTML = '';

    if (!achievements || !Array.isArray(achievements)) {
        console.error('Achievements is not an array:', achievements);
        return;
    }

    console.log(`Creating ${achievements.length} achievement cards`);
    achievements.forEach((achievement, index) => {
        const card = createAchievementCard(achievement, index);
        container.appendChild(card);
    });
    console.log('Achievements loaded successfully');
}

function createAchievementCard(achievement, index) {
    const card = document.createElement('div');
    card.className = `achievement-card ${achievement.completed ? 'completed' : ''}`;
    card.style.animationDelay = `${index * 0.1}s`;
    card.dataset.achievementId = achievement.id;

    const progressPercentage = (achievement.progress / achievement.maxProgress) * 100;

    card.innerHTML = `
        <div class="achievement-title">${achievement.title}</div>
        <div class="achievement-description">${achievement.description}</div>
        <div class="achievement-progress">
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progressPercentage}%"></div>
            </div>
            <div class="progress-text">${achievement.progress}/${achievement.maxProgress}</div>
        </div>
        ${achievement.requiredCards ? `<div class="achievement-cards">
            <span class="card-tag required">Required Cards:</span>
            ${achievement.requiredCards.map(card => `<span class="card-tag">${card}</span>`).join('')}
        </div>` : ''}
    `;

    card.addEventListener('click', () => {
        toggleAchievementProgress(achievement.id);
    });

    return card;
}

function toggleAchievementProgress(achievementId) {
    const achievement = achievements.find(a => a.id === achievementId);
    if (!achievement) return;

    if (achievement.progress < achievement.maxProgress) {
        achievement.progress++;
        if (achievement.progress >= achievement.maxProgress) {
            achievement.completed = true;
        }
    } else {
        achievement.progress = 0;
        achievement.completed = false;
    }

    loadAchievements();
    updateStats();
    saveProgress(); // Save immediately after any change
}

function clearAllProgress() {
    achievements.forEach(achievement => {
        achievement.progress = 0;
        achievement.completed = false;
    });
    
    loadAchievements();
    updateStats();
    saveProgress();
    
    // Show confirmation
    alert('All achievement progress has been cleared!');
}

function updateStats() {
    const totalAchievements = achievements.length;
    const completedAchievements = achievements.filter(a => a.completed).length;
    const completionPercentage = Math.round((completedAchievements / totalAchievements) * 100);

    document.getElementById('total-achievements').textContent = totalAchievements;
    document.getElementById('completed-achievements').textContent = completedAchievements;
    document.getElementById('completion-percentage').textContent = `${completionPercentage}%`;
}

function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', filterAchievements);

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterAchievements();
        });
    });

    // Clear selection button
    const clearButton = document.getElementById('clear-selection');
    clearButton.addEventListener('click', clearCardSelection);

    // Clear all progress button
    const clearAllButton = document.getElementById('clear-all-progress');
    clearAllButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear all achievement progress? This cannot be undone.')) {
            clearAllProgress();
        }
    });

    // Card search functionality
    const cardSearchInput = document.getElementById('card-search-input');
    cardSearchInput.addEventListener('input', filterCards);
}

function filterAchievements() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    const cards = document.querySelectorAll('.achievement-card');

    cards.forEach(card => {
        const title = card.querySelector('.achievement-title').textContent.toLowerCase();
        const description = card.querySelector('.achievement-description').textContent.toLowerCase();
        const isCompleted = card.classList.contains('completed');
        const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);
        
        let matchesFilter = true;
        if (activeFilter === 'completed') {
            matchesFilter = isCompleted;
        } else if (activeFilter === 'incomplete') {
            matchesFilter = !isCompleted;
        }

        card.style.display = matchesSearch && matchesFilter ? 'block' : 'none';
    });
}



function saveProgress() {
    localStorage.setItem('shotgunKingProgress', JSON.stringify(achievements));
}

function loadProgress() {
    const saved = localStorage.getItem('shotgunKingProgress');
    if (saved) {
        try {
            const savedAchievements = JSON.parse(saved);
            achievements.forEach(achievement => {
                const savedAchievement = savedAchievements.find(a => a.id === achievement.id);
                if (savedAchievement) {
                    achievement.progress = savedAchievement.progress;
                    achievement.completed = savedAchievement.completed;
                }
            });
        } catch (error) {
            console.error('Error loading saved progress:', error);
        }
    }
}

// Load saved progress on startup
loadProgress(); 