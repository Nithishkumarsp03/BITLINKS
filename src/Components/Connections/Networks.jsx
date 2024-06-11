import React, { useState, useEffect } from 'react';
import Carousel from '../../Assets/carousel.svg';
import './styles.css';

export default function Networks({ }) {
  const [viewPersonIndex, setViewPersonIndex] = useState(null);
  const [View, setView] = useState(false);

  const handleViewPerson = (index) => {
    const newEditingState = viewPersonIndex === index ? null : index;
    setViewPersonIndex(newEditingState);
    // onEditProfileToggle(newEditingState !== null);
  };

  const handleViewToggle = () => {
    const newView = !View;
    // setMarkedComplete(newView);
    if (newView) {

    } else {

    }
  };

  useEffect(() => {
    if (View) {
      setViewPersonIndex(null);
    }
  }, [View]);

  const isEditingOrViewing2 =  View || viewPersonIndex !== null;

  return (
    <div
      className={`myconnections ${isEditingOrViewing2 ? 'editing' : ''}`}
      style={{ width: isEditingOrViewing2 ? '270px' : '733px' }}
    >
      {Array(5).fill(null).map((_, index) => (
        <div
          className={`person ${viewPersonIndex === index ? 'editing-border' : ''}`}
          key={index}
        >
          <div className="profile"></div>
          <div className='username'>
            <h5>NAME</h5>
            <p>Senior UI Designer</p>
            <p
              style={{ color: "blue", cursor: "pointer", marginTop: "3px" }}
              // onClick={() => handleViewPerson(index)}
            >
              {viewPersonIndex === index ? 'Edit profile' : 'View connections'}
              {viewPersonIndex === index
                ? <i className="fa-solid fa-pen-to-square"></i>
                : <img className='carousel' src={Carousel} alt="carousel" />}
            </p>
          </div>
          {(viewPersonIndex === index) && (
            <div className='addprofiles'>
              <i className="fa-solid fa-square-plus"></i>
            </div>
          )}
          {!View && (
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
          )}
        </div>
      ))}
    </div>
  );
}
