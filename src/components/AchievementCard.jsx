import React from 'react';

function AchievementCard({ achievement, onToggleProgress, animationDelay }) {
  const progressPercentage = (achievement.progress / achievement.maxProgress) * 100;

  const handleClick = () => {
    onToggleProgress(achievement.id);
  };

  return (
    <div
      className={`achievement-card ${achievement.completed ? 'completed' : ''}`}
      style={{ animationDelay: `${animationDelay}s` }}
      onClick={handleClick}
    >
      <div className="achievement-title">{achievement.title}</div>
      <div className="achievement-description">{achievement.description}</div>
      <div className="achievement-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className="progress-text">
          {achievement.progress}/{achievement.maxProgress}
        </div>
      </div>
      {achievement.requiredCards && (
        <div className="achievement-cards">
          <span className="card-tag required">Required Cards:</span>
          {achievement.requiredCards.map((card, index) => (
            <span key={index} className="card-tag">
              {card}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default AchievementCard;
