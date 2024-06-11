import React, { useState, useEffect } from 'react';
import Carousel from '../../Assets/carousel.svg';
import './styles.css';

export default function Myconnections({ markedComplete }) {
  const [markedCompleteIndex, setmarkedCompleteIndex] = useState(null);
  
  const handlemarkedComplete = (index) => {
    const newmarkedComplete = markedCompleteIndex === index ? null : index;
    setmarkedCompleteIndex(newmarkedComplete);
    // onmarkedCompleteToggle(newmarkedComplete !== null);
  };

  useEffect(() => {
    if (markedComplete) {
      setmarkedCompleteIndex(null);
    }
  }, [markedComplete]);

  const isEditingOrViewing = markedComplete || markedCompleteIndex !== null;

  return (
    <div
      className={`myconnections ${isEditingOrViewing ? 'editing' : ''}`}
      style={{ width: isEditingOrViewing ? '270px' : '733px' }}
    >
      {Array(5).fill(null).map((_, index) => (
        <div
          className={`person ${markedCompleteIndex === index ? 'editing-border' : ''}`}
          key={index}
        >
          <div className="profile"></div>
          <div className='username'>
            <h5>NAME</h5>
            <p>Senior UI Designer</p>
            <p
              style={{ color: "blue", cursor: "pointer", marginTop: "3px" }}
              onClick={() => {
                handlemarkedComplete(index);
              }}
            >
              {markedCompleteIndex === index ? 'Edit profile' : 'View connections'}
              {markedCompleteIndex === index 
                ? <i className="fa-solid fa-pen-to-square"></i>
                : <img className='carousel' src={Carousel} alt="carousel" />}
            </p>
          </div>
          {(markedCompleteIndex === index ) && (
            <div className='addprofiles'>
              <i className="fa-solid fa-square-plus"></i>
            </div>
          )}
          {(!markedComplete && (
            <>
              <hr />
              <div className="job">
                <p>Design @BYJU'S (Hiring Product, UI, Motion Designers) Design @BYJU'S (Hiring Product, UI, Motion Designers)</p>
              </div>
              <div className="contact">
                <p><i className="fa-solid fa-phone"></i> +91 1234567890</p>
                <p><i className="fa-solid fa-envelope"></i> abc@gmail.com</p>
              </div>
            </>
          ))}
        </div>
      ))}
    </div>
  );
}