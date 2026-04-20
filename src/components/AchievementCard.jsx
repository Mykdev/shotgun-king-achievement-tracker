import React from 'react';
import { formatAchievementRequirements } from '../data/achievementRequirements';

function AchievementCard({ achievement, onToggleProgress, animationDelay }) {
  const progressPercentage = (achievement.progress / achievement.maxProgress) * 100;
  const requirementText = formatAchievementRequirements(achievement);

  const handleClick = () => {
    onToggleProgress(achievement.id);
  };

  return (
    <div
      id={`achievement-${achievement.id}`}
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
      {requirementText && (
        <div className="achievement-cards">
          <span className="card-tag required">Required Cards:</span>
          <span className="card-tag">{requirementText}</span>
        </div>
      )}
    </div>
  );
}

export default AchievementCard;
