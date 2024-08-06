import React, { useState } from 'react';
import './styles.css';

export default function ScheduleNetwork({ onViewToggle }) {
  const [view, setView] = useState(null);

  const handleView = () => {
    const newView = !view;
    setView(newView);
    onViewToggle(newView); // Ensure this function is called correctly
  };

  return (
    <div>
      <div className="scheduled">
        <div className='top'>
          <h4>Most Popular Networks</h4>
          <i className="fa-solid fa-circle-info" style={{ marginLeft: "50px" }}></i>
        </div>
        {[...Array(3)].map((_, index) => (
          <div className="myschedule" key={index}>
            <div className="profile"></div>
            <div className="details">
              <h5>NAME</h5>
              <p>Design @BYJU'S (Hiring Product, UI, Motion Designers)</p>
              <button onClick={handleView}>view person</button>
            </div>
          </div>
        ))}
        <p style={{ textAlign: "center", color: "#2867B2" }}>See more<i className="fa-solid fa-arrow-right-long" style={{ marginLeft: "7px" }}></i></p>
      </div>
    </div>
  );
}
