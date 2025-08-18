import React from 'react';
import AchievementCard from './AchievementCard';

function AchievementGrid({ achievements, onToggleProgress }) {
  return (
    <div className="achievements-grid">
      {achievements.map((achievement, index) => (
        <AchievementCard
          key={achievement.id}
          achievement={achievement}
          onToggleProgress={onToggleProgress}
          animationDelay={index * 0.1}
        />
      ))}
    </div>
  );
}

export default AchievementGrid;
