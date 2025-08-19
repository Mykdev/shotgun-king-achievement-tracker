import React from 'react';
import CardItem from './CardItem';
import QualifyingAchievements from './QualifyingAchievements';
import MissingCardsSummary from './MissingCardsSummary';

function CardSelection({
  selectedCards,
  onToggleCard,
  onRemoveCard,
  onClearSelection,
  searchTerm,
  onSearchChange,
  filteredCards,
  qualifyingAchievements,
  missingCards,
  prerequisiteCards,
  newlyUnlockedAchievements,
  getLocalImagePath,
  cardDetails
}) {
  const getSelectedCardCount = (cardName) => {
    return selectedCards.filter(card => card === cardName).length;
  };

  const getCardClassName = (card) => {
    const cardName = typeof card === 'string' ? card : card.name;
    const count = getSelectedCardCount(cardName);
    if (count === 0) return '';
    if (count === 1) return 'selected';
    if (count >= 5) return 'selected-5';
    return `selected-${count}`;
  };

  const isCardDisabled = (card) => {
    const cardName = typeof card === 'string' ? card : card.name;
    const isAvailable = typeof card === 'string' ? true : card.isAvailable;
    return (selectedCards.length >= 20 && getSelectedCardCount(cardName) === 0) || !isAvailable;
  };

  const handleCardClick = (card) => {
    const cardName = typeof card === 'string' ? card : card.name;
    if (!isCardDisabled(card)) {
      onToggleCard(cardName);
    }
  };

  const handleCardRightClick = (e, card) => {
    e.preventDefault();
    const cardName = typeof card === 'string' ? card : card.name;
    onRemoveCard(cardName);
  };

  return (
    <div className="card-selection-section">
      <h2><i className="fas fa-cards-blank"></i> Select Your Cards</h2>
      <p>Select up to 20 cards from your current run to see which achievements you qualify for</p>
      
      <div className="card-selection-controls">
        <div className="selected-cards-count">
          <span>{selectedCards.length}</span> / 20 cards selected
        </div>
        <button className="clear-btn" onClick={onClearSelection}>
          <i className="fas fa-trash"></i> Clear Selection
        </button>
      </div>

      <div className="card-search-container">
        <div className="card-search-box">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search for cards..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <div className="search-stats">
          <span>{filteredCards.length}</span> cards shown
        </div>
      </div>

      <div className="card-grid">
        {filteredCards.map(card => (
          <CardItem
            key={typeof card === 'string' ? card : card.name}
            card={card}
            selectedCount={getSelectedCardCount(typeof card === 'string' ? card : card.name)}
            className={getCardClassName(card)}
            disabled={isCardDisabled(card)}
            onClick={() => handleCardClick(card)}
            onRightClick={(e) => handleCardRightClick(e, card)}
            getLocalImagePath={getLocalImagePath}
            cardDetails={cardDetails}
          />
        ))}
      </div>

             <MissingCardsSummary 
         missingCards={missingCards} 
         cardDetails={cardDetails}
         getLocalImagePath={getLocalImagePath}
         onCardSelect={onToggleCard}
         onCardDeselect={onRemoveCard}
       />
      
             {/* Prerequisite Cards Section */}
       {prerequisiteCards && prerequisiteCards.length > 0 && (
         <div className="prerequisite-cards-section">
           <h3><i className="fas fa-lock"></i> Prerequisite Cards Needed</h3>
           <p>These cards are required to unlock other cards needed for achievements:</p>
           <div className="prerequisite-cards-grid">
             {prerequisiteCards.map(card => (
                               <div 
                  key={card} 
                  className="prerequisite-card-item clickable-card"
                  onClick={() => onToggleCard(card)}
                  onContextMenu={(e) => {
                    e.preventDefault();
                    onRemoveCard(card);
                  }}
                  title={`Click to select ${card}, right-click to deselect`}
                >
                 <div className="prerequisite-card-image">
                   <img
                     src={getLocalImagePath(card)}
                     alt={card}
                     onError={(e) => {
                       e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtdG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMzMzMzMzIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1tYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNjY2NjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Q2FyZAo8L3RleHQ+Cjwvc3ZnPgo=';
                     }}
                   />
                 </div>
                 <div className="prerequisite-card-name">{card}</div>
               </div>
             ))}
           </div>
         </div>
       )}
       
       {/* Newly Unlocked Achievements Section */}
       {newlyUnlockedAchievements && newlyUnlockedAchievements.length > 0 && (
         <div className="newly-unlocked-achievements-section">
           <h3><i className="fas fa-unlock"></i> Newly Unlocked Achievements!</h3>
           <p>Selecting prerequisite cards has unlocked these achievements:</p>
           <div className="newly-unlocked-achievements-grid">
             {newlyUnlockedAchievements.map(achievement => (
               <div key={achievement.id} className="newly-unlocked-achievement-item">
                 <div className="achievement-info">
                   <h4>{achievement.title}</h4>
                   <p>{achievement.description}</p>
                   <div className="achievement-requirements">
                     <span className="requirements-label">Required Cards:</span>
                     {achievement.requiredCards.map((card, index) => (
                                               <span 
                          key={card} 
                          className={`required-card clickable-card ${selectedCards.includes(card) ? 'selected' : ''}`}
                          onClick={() => onToggleCard(card)}
                          onContextMenu={(e) => {
                            e.preventDefault();
                            onRemoveCard(card);
                          }}
                          title={`Click to select ${card}, right-click to deselect`}
                        >
                          {card}{index < achievement.requiredCards.length - 1 ? ', ' : ''}
                        </span>
                     ))}
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </div>
       )}
      
             <QualifyingAchievements 
         qualifyingAchievements={qualifyingAchievements}
         selectedCards={selectedCards}
         cardDetails={cardDetails}
         getLocalImagePath={getLocalImagePath}
         onCardSelect={onToggleCard}
         onCardDeselect={onRemoveCard}
       />
    </div>
  );
}

export default CardSelection;
