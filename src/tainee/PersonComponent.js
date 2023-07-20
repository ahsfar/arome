import React from 'react';
import './PersonComponent.css'; 

const PersonComponent = () => {
  return (
    <div className="person-container">
      {/* Left column: Person pic */}
      <div className="pic-column">
        <img
          src="path_to_your_person_pic.jpg"
          alt="Person"
          style={{ width: '100px', height: '100px' }}
        />
      </div>

      {/* Middle column: Information */}
      <div className="info-column">
        <h2>Name: Jack</h2>
        <p>Name: Jack</p>
        <p>Email: jack@gmail.com</p>
        <p>Description: Crazy</p>

      </div>
        {/* Middle column: Information */}
        <div className="info-column">
        <h2>Description</h2>
        <p>: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* Right column: Buttons */}
      <div className="button-column">
        <button>Button 1</button>
        <button>Button 2</button>
      </div>
    </div>
  );
};

export default PersonComponent;
