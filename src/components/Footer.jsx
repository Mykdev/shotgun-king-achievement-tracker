import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3><i className="fas fa-info-circle"></i> About</h3>
          <p>Shotgun King Achievement Tracker is a fan-made tool to help players track their progress and discover new achievements in the game Shotgun King: The Final Checkmate.</p>
        </div>
        <div className="footer-section">
          <h3><i className="fas fa-exclamation-triangle"></i> Disclaimer</h3>
          <p>This tool is not affiliated with, endorsed by, or connected to the official Shotgun King: The Final Checkmate game or its developers. All game content, achievements, and card information belong to their respective owners. This tracker is created for educational and entertainment purposes only.</p>
        </div>
        <div className="footer-section">
          <h3><i className="fas fa-tools"></i> Features</h3>
          <ul>
            <li>Track achievement progress</li>
            <li>Find required cards for achievements</li>
            <li>Search and filter achievements</li>
            <li>Card selection and recommendations</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Shotgun King Achievement Tracker | Fan-made tool for educational purposes</p>
      </div>
    </footer>
  );
}

export default Footer;
