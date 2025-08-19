import React, { useState } from 'react';
import FeedbackForm from './FeedbackForm';

function Header() {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const openFeedback = () => setIsFeedbackOpen(true);
  const closeFeedback = () => setIsFeedbackOpen(false);

  return (
    <>
      <header className="header">
        <div className="header-content">
          <h1><i className="fas fa-crown"></i> Shotgun King Achievement Tracker</h1>
          <p>Track your progress and find the best cards for each achievement</p>
        </div>
        <button className="feedback-btn" onClick={openFeedback} title="Send Feedback">
          <i className="fas fa-comment-dots"></i>
          <span>Feedback</span>
        </button>
      </header>
      
      <FeedbackForm isOpen={isFeedbackOpen} onClose={closeFeedback} />
    </>
  );
}

export default Header;
