export function getAchievementRequirementGroups(achievement) {
  if (Array.isArray(achievement.requiredCardGroups) && achievement.requiredCardGroups.length > 0) {
    return achievement.requiredCardGroups
      .map(group => (Array.isArray(group) ? group.filter(Boolean) : []))
      .filter(group => group.length > 0);
  }

  if (Array.isArray(achievement.requiredCards) && achievement.requiredCards.length > 0) {
    return achievement.requiredCards.map(card => [card]);
  }

  return [];
}

export function getAchievementReferencedCards(achievement) {
  return getAchievementRequirementGroups(achievement).flat();
}

export function formatAchievementRequirements(achievement) {
  const groups = getAchievementRequirementGroups(achievement);

  if (groups.length === 0) {
    return '';
  }

  return groups
    .map(group => {
      if (group.length === 1) {
        return group[0];
      }

      return `(${group.join(' OR ')})`;
    })
    .join(' and ');
}
