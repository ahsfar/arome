import React, { useState } from 'react';
import Modal from 'react-modal';
import './CoursesSummaryComponent.css';

const CoursesSummaryComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');

  const handleFeedbackClick = (feedback) => {
    setFeedbackText(feedback);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="courses-summary-container">
      <h2>My Courses</h2>
      <p>Below is the summary of your courses</p>

      <div className="course-row">
        <div className="course-container">
          <h3>SQL Course</h3>
          <p>Trainer: Krish</p>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: '80%' }}>
              80%
            </div>
          </div>
          <div className="grade-feedback">
            <p>
              <span className="clickable-text" onClick={() => handleFeedbackClick('A-')}>
                Grade
              </span>
            </p>
            <p>
              <span className="clickable-text" onClick={() => handleFeedbackClick('Great work!')}>
                Feedback
              </span>
            </p>
          </div>
        </div>

        {/* Add more course containers as needed */}
      </div>

      {/* Feedback Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="feedback-modal"
        overlayClassName="feedback-modal-overlay"
      >
        <h3>Feedback</h3>
        <p>{feedbackText}</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default CoursesSummaryComponent;
