import React, { useState } from 'react';
import './styles.css';

export default function Myschedule({ onMarkedCompleteToggle }) {

  const [MarkedComplete, setMarkedComplete] = useState(null);

  const handleMarkedComplete = () => {
    const newMarkedComplete = !MarkedComplete;
    setMarkedComplete(newMarkedComplete);
    onMarkedCompleteToggle(newMarkedComplete);
  };

  return (
    <div>
      <div className="scheduled">
        <div className='top'>
          <h4>My Schedule</h4>
          <div className="notifications">
            <p style={{color: "#FFFFFF", textAlign: "center", marginTop: "-2.5px"}}>3</p>
          </div>
          <i className="fa-solid fa-circle-info" style={{marginLeft: "129px"}}></i>
        </div>
        {[...Array(3)].map((_, index) => (
          <div className="myschedule" key={index}>
            <div className="profile"></div>
            <div className="details">
              <h5>NAME</h5>
              <p>Design @BYJU'S (Hiring Product, UI, Motion Designers)</p>
              <div className="buttons">
                <button onClick={handleMarkedComplete}>Mark as complete</button>
                <button style={{marginLeft: "10px"}}>Call</button>
              </div>
            </div>
          </div>
        ))}
        <p style={{textAlign: "center", color: "#2867B2"}}>See more<i className="fa-solid fa-arrow-right-long" style={{marginLeft: "7px"}}></i></p>
      </div>
    </div>
  );
}
