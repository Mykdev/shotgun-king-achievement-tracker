import React from 'react';

function MissingCardsSummary({ missingCards }) {
  if (Object.keys(missingCards).length === 0) {
    return (
      <div className="missing-cards-summary">
        <h3><i className="fas fa-exclamation-triangle"></i> Cards You Still Need</h3>
        <div className="missing-cards-list">
          <p className="no-cards-message">All required cards are selected!</p>
        </div>
      </div>
    );
  }

  const missingCardsList = Object.entries(missingCards)
    .sort(([,a], [,b]) => b - a) // Sort by count descending
    .map(([card, count]) => (
      <span key={card} className="missing-card-tag">
        {card} ({count} more needed)
      </span>
    ));

  return (
    <div className="missing-cards-summary">
      <h3><i className="fas fa-exclamation-triangle"></i> Cards You Still Need</h3>
      <div className="missing-cards-display">
        {missingCardsList}
      </div>
    </div>
  );
}

export default MissingCardsSummary;
