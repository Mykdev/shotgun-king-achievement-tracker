import React from 'react';

function QualifyingAchievements({ qualifyingAchievements, selectedCards }) {
  if (selectedCards.length === 0) {
    return (
      <div className="qualifying-achievements">
        <h3><i className="fas fa-trophy"></i> Achievements You Qualify For</h3>
        <div className="qualifying-list">
          <p className="no-cards-message">Select cards to see qualifying achievements</p>
        </div>
      </div>
    );
  }

  if (qualifyingAchievements.length === 0) {
    return (
      <div className="qualifying-achievements">
        <h3><i className="fas fa-trophy"></i> Achievements You Qualify For</h3>
        <div className="qualifying-list">
          <p className="no-cards-message">No qualifying achievements with your selected cards</p>
        </div>
      </div>
    );
  }

  const getCardStatus = (achievement, cardName) => {
    const requiredCount = achievement.requiredCards.filter(card => card === cardName).length;
    const selectedCount = selectedCards.filter(card => card === cardName).length;
    
    if (selectedCount >= requiredCount) {
      return { status: 'selected', text: `✓ ${cardName} (${selectedCount}/${requiredCount})` };
    } else if (selectedCount > 0) {
      return { status: 'partial', text: `⚠ ${cardName} (${selectedCount}/${requiredCount})` };
    } else {
      return { status: 'missing', text: `○ ${cardName} (0/${requiredCount})` };
    }
  };

  const getAchievementSummary = (achievement) => {
    const requiredCardCounts = {};
    achievement.requiredCards.forEach(card => {
      requiredCardCounts[card] = (requiredCardCounts[card] || 0) + 1;
    });
    
    const selectedCardCounts = {};
    selectedCards.forEach(card => {
      selectedCardCounts[card] = (selectedCardCounts[card] || 0) + 1;
    });
    
    const completeCards = [];
    const partialCards = [];
    const missingCards = [];
    
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
    
    return { completeCards, partialCards, missingCards };
  };

  return (
    <div className="qualifying-achievements">
      <h3><i className="fas fa-trophy"></i> Achievements You Qualify For</h3>
      <div className="qualifying-list">
        {qualifyingAchievements.map(achievement => {
          const summary = getAchievementSummary(achievement);
          const uniqueRequiredCards = [...new Set(achievement.requiredCards)];
          
          return (
            <div key={achievement.id} className="qualifying-achievement">
              <div className="qualifying-achievement-title" title={achievement.description}>
                {achievement.title}
              </div>
              
              <div className="achievement-summary">
                {summary.completeCards.length > 0 && (
                  <div className="summary-section complete">
                    <strong>✓ Complete:</strong> {summary.completeCards.join(', ')}
                  </div>
                )}
                {summary.partialCards.length > 0 && (
                  <div className="summary-section partial">
                    <strong>⚠ Partial:</strong> {summary.partialCards.join(', ')}
                  </div>
                )}
                {summary.missingCards.length > 0 && (
                  <div className="summary-section missing">
                    <strong>○ Missing:</strong> {summary.missingCards.join(', ')}
                  </div>
                )}
              </div>
              
              <div className="qualifying-achievement-cards">
                {uniqueRequiredCards.map(card => {
                  const cardStatus = getCardStatus(achievement, card);
                  return (
                    <span
                      key={card}
                      className={`qualifying-card-tag ${cardStatus.status}`}
                    >
                      {cardStatus.text}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default QualifyingAchievements;
