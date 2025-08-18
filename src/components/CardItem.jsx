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
  const details = cardDetails[card] || {};
  const fallbackImageData = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMzMzMzMzIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNjY2NjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Q2FyZAo8L3RleHQ+Cjwvc3ZnPgo=';

  const handleImageError = (e) => {
    e.target.src = fallbackImageData;
    e.target.onerror = null;
  };

  const displayName = selectedCount > 1 ? `${card} (${selectedCount})` : card;

  return (
    <div
      className={`card-item ${className} ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      onContextMenu={onRightClick}
    >
      <div className="card-image">
        <img
          src={details.image || getLocalImagePath(card)}
          alt={card}
          onError={handleImageError}
        />
      </div>
      <div className="card-info">
        <div className="card-name">{displayName}</div>
        {details.description && (
          <div className="card-description">{details.description}</div>
        )}
        {details.maxAmount && (
          <div className="card-max">Max: {details.maxAmount}</div>
        )}
        {details.requirements && (
          <div className="card-requirements">Requires: {details.requirements}</div>
        )}
      </div>
    </div>
  );
}

export default CardItem;
