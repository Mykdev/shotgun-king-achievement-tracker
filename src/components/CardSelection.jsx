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
  getLocalImagePath,
  cardDetails
}) {
  const getSelectedCardCount = (cardName) => {
    return selectedCards.filter(card => card === cardName).length;
  };

  const getCardClassName = (cardName) => {
    const count = getSelectedCardCount(cardName);
    if (count === 0) return '';
    if (count === 1) return 'selected';
    if (count >= 5) return 'selected-5';
    return `selected-${count}`;
  };

  const isCardDisabled = (cardName) => {
    return selectedCards.length >= 20 && getSelectedCardCount(cardName) === 0;
  };

  const handleCardClick = (cardName) => {
    if (!isCardDisabled(cardName)) {
      onToggleCard(cardName);
    }
  };

  const handleCardRightClick = (e, cardName) => {
    e.preventDefault();
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
            key={card}
            card={card}
            selectedCount={getSelectedCardCount(card)}
            className={getCardClassName(card)}
            disabled={isCardDisabled(card)}
            onClick={() => handleCardClick(card)}
            onRightClick={(e) => handleCardRightClick(e, card)}
            getLocalImagePath={getLocalImagePath}
            cardDetails={cardDetails}
          />
        ))}
      </div>

      <MissingCardsSummary missingCards={missingCards} />
      <QualifyingAchievements 
        qualifyingAchievements={qualifyingAchievements}
        selectedCards={selectedCards}
      />
    </div>
  );
}

export default CardSelection;
