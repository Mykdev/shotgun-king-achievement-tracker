import React from 'react';

function CardItem({
  card,
  selectedCount,
  className,
  disabled,
  onClick,
  onRightClick,
  getLocalImagePath,
  cardDetails
}) {
  // Handle both old string format and new object format
  const cardName = typeof card === 'string' ? card : card.name;
  const cardData = typeof card === 'string' ? {} : card;
  const details = cardDetails[cardName] || {};
  const fallbackImageData = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMzMzMzMzIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNjY2NjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Q2FyZAo8L3RleHQ+Cjwvc3ZnPgo=';

  const handleImageError = (e) => {
    e.target.src = fallbackImageData;
    e.target.onerror = null;
  };

  const displayName = selectedCount > 1 ? `${cardName} (${selectedCount})` : cardName;

  return (
    <div
      className={`card-item ${className} ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      onContextMenu={onRightClick}
    >
      <div className="card-image">
        <img
          src={details.image || getLocalImagePath(cardName)}
          alt={cardName}
          onError={handleImageError}
        />
        {/* Availability indicator */}
        {cardData.isAvailable !== undefined && (
          <div className={`availability-indicator ${cardData.isAvailable ? 'available' : 'locked'}`}>
            {cardData.isAvailable ? '✓' : '🔒'}
          </div>
        )}
      </div>
      <div className="card-info">
        <div className="card-name">{displayName}</div>
        {details.description && (
          <div className="card-description">{details.description}</div>
        )}
        {details.maxAmount && (
          <div className="card-max">Max: {details.maxAmount}</div>
        )}
                 {/* Show prerequisites if card is locked */}
         {!cardData.isAvailable && cardData.prerequisites && cardData.prerequisites.length > 0 && (
           <div className="card-prerequisites">
             <span className="prerequisites-label">
               {cardData.prerequisites.length > 1 ? 'Needs (any):' : 'Needs:'}
             </span>
             {cardData.prerequisites.map((prereq, index) => (
               <span key={prereq} className="prerequisite-card">
                 {prereq}{index < cardData.prerequisites.length - 1 ? ' OR ' : ''}
               </span>
             ))}
           </div>
         )}
        {/* Show other requirements */}
        {cardData.otherRequirements && cardData.otherRequirements.length > 0 && (
          <div className="card-other-requirements">
            <span className="requirements-label">Other:</span>
            {cardData.otherRequirements.map((req, index) => (
              <span key={req} className="other-requirement">
                {req}{index < cardData.otherRequirements.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>
        )}
        {/* Show original requirements only if no parsed data exists */}
        {details.requirements && 
         (!cardData.prerequisites || cardData.prerequisites.length === 0) && 
         (!cardData.otherRequirements || cardData.otherRequirements.length === 0) && (
          <div className="card-requirements">Requires: {details.requirements}</div>
        )}
      </div>
    </div>
  );
}

export default CardItem;
