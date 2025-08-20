import React, { useState } from 'react';
import { getFallbackImagePath } from '../config/env.js';

function MissingCardsSummary({ missingCards, cardDetails, getLocalImagePath, onCardSelect, onCardDeselect }) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleCardHover = (event, cardName) => {
    const rect = event.target.getBoundingClientRect();
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 10
    });
    setHoveredCard(cardName);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const handleCardClick = (cardName) => {
    if (onCardSelect) {
      onCardSelect(cardName);
    }
  };

  const handleCardRightClick = (e, cardName) => {
    e.preventDefault();
    if (onCardDeselect) {
      onCardDeselect(cardName);
    }
  };

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
             <span 
         key={card} 
         className="missing-card-tag clickable-card"
         onMouseEnter={(e) => handleCardHover(e, card)}
         onMouseLeave={handleCardLeave}
         onClick={() => handleCardClick(card)}
         onContextMenu={(e) => handleCardRightClick(e, card)}
         title={`Click to select ${card}, right-click to deselect`}
       >
        {card} ({count} more needed)
      </span>
    ));

  return (
    <div className="missing-cards-summary">
      <h3><i className="fas fa-exclamation-triangle"></i> Cards You Still Need</h3>
      <div className="missing-cards-display">
        {missingCardsList}
      </div>
      
      {/* Tooltip */}
      {hoveredCard && (
        <div 
          className="card-tooltip"
          style={{
            left: tooltipPosition.x,
            top: tooltipPosition.y,
            transform: 'translateX(-50%)'
          }}
        >
          <div className="tooltip-card-image">
            <img 
              src={cardDetails[hoveredCard]?.image || getLocalImagePath(hoveredCard)} 
              alt={hoveredCard}
                             onError={(e) => {
                                         e.target.src = getFallbackImagePath();
               }}
            />
          </div>
                     <div className="tooltip-card-info">
             <div className="tooltip-card-name">{hoveredCard}</div>
           </div>
        </div>
      )}
    </div>
  );
}

export default MissingCardsSummary;
