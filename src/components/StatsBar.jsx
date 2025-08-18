import React from 'react';

function StatsBar({ stats, onClearAllProgress }) {
  const handleClearAllProgress = () => {
    if (window.confirm('Are you sure you want to clear all achievement progress? This cannot be undone.')) {
      onClearAllProgress();
    }
  };

  return (
    <div className="stats-bar">
      <div className="stat-item">
        <span className="stat-number">{stats.totalAchievements}</span>
        <span className="stat-label">Total Achievements</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">{stats.completedAchievements}</span>
        <span className="stat-label">Completed</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">{stats.completionPercentage}%</span>
        <span className="stat-label">Completion</span>
      </div>
      <div className="stat-item">
        <button 
          className="clear-all-btn" 
          title="Clear all achievement progress"
          onClick={handleClearAllProgress}
        >
          <i className="fas fa-trash-alt"></i>
          <span>Reset Progress</span>
        </button>
      </div>
    </div>
  );
}

export default StatsBar;
