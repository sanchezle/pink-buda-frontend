import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const Slideshow = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);
    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  return (
    <div className="container-slideshow">
      <div className="slideshow-container">
        <div className="slideshow-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div className="slide" key={index}>
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
