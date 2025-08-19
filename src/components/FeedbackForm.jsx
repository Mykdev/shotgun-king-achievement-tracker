import React, { useState } from 'react';

function FeedbackForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Shotgun King Achievement Tracker Feedback',
    message: '',
    feedbackType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create mailto link with form data
      const mailtoLink = `mailto:steambotemail4@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nFeedback Type: ${formData.feedbackType}\n\nMessage:\n${formData.message}`
      )}`;

      // Open default email client
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
        setFormData({
          name: '',
          email: '',
          subject: 'Shotgun King Achievement Tracker Feedback',
          message: '',
          feedbackType: 'general'
        });
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      setFormData({
        name: '',
        email: '',
        subject: 'Shotgun King Achievement Tracker Feedback',
        message: '',
        feedbackType: 'general'
      });
      setSubmitStatus(null);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="feedback-overlay" onClick={handleClose}>
      <div className="feedback-modal" onClick={(e) => e.stopPropagation()}>
        <div className="feedback-header">
          <h2><i className="fas fa-comment-dots"></i> Send Feedback</h2>
          <button 
            className="feedback-close-btn" 
            onClick={handleClose}
            disabled={isSubmitting}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="feedback-form">
          <div className="form-group">
            <label htmlFor="name">Name (Optional):</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email (Optional):</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="feedbackType">Feedback Type:</label>
            <select
              id="feedbackType"
              name="feedbackType"
              value={formData.feedbackType}
              onChange={handleInputChange}
              disabled={isSubmitting}
            >
              <option value="general">General Feedback</option>
              <option value="bug">Bug Report</option>
              <option value="feature">Feature Request</option>
              <option value="improvement">Improvement Suggestion</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message: *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Please share your feedback, suggestions, or report any issues..."
              rows="5"
              required
              disabled={isSubmitting}
            />
          </div>

          {submitStatus === 'success' && (
            <div className="feedback-success">
              <i className="fas fa-check-circle"></i>
              Feedback sent successfully! Opening your email client...
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="feedback-error">
              <i className="fas fa-exclamation-circle"></i>
              There was an error sending feedback. Please try again.
            </div>
          )}

          <div className="feedback-actions">
            <button 
              type="button" 
              className="feedback-cancel-btn"
              onClick={handleClose}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="feedback-submit-btn"
              disabled={isSubmitting || !formData.message.trim()}
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Sending...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i>
                  Send Feedback
                </>
              )}
            </button>
          </div>
        </form>

        <div className="feedback-info">
          <p><i className="fas fa-info-circle"></i> Your feedback will be sent to: <strong>steambotemail4@gmail.com</strong></p>
          <p><i className="fas fa-envelope"></i> This will open your default email client with a pre-filled message.</p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackForm;
