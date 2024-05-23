import React, { useState } from 'react';
import es1 from './menu/menu-es1.jpg';
import es2 from './menu/menu-es2.jpg';
import en1 from './menu/menu-english12.jpg';
import en2 from './menu/menu-english222.jpg';
import cat1 from './menu/menu-catala12.jpg';
import cat2 from './menu/menu-catala22.jpg';

const menuCatalan = [cat1, cat2];
const menuEnglish = [en1, en2];
const menuSpanish = [es1, es2];

const Menu = () => {
  const [language, setLanguage] = useState('spanish');
  const [viewStarters, setViewStarters] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  const getMenuImages = () => {
    switch (language) {
      case 'catalan':
        return menuCatalan;
      case 'english':
        return menuEnglish;
      default:
        return menuSpanish;
    }
  };

  const menuImages = getMenuImages();
  const displayedImage = viewStarters ? menuImages[1] : menuImages[0];

  const imageStyle = {
    display: 'flex',
    maxWidth: '90%',
    height: 'auto',
    cursor: 'zoom-in'
  };

  const zoomedImageStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '100%',
    maxHeight: '100%',
    zIndex: 1000,
    cursor: 'zoom-out'
  };

  return (
    <div className="menu-container">
      <div className="menu-buttons">
        <button onClick={() => setLanguage('spanish')}>Español</button>
        <button onClick={() => setLanguage('english')}>English</button>
        <button onClick={() => setLanguage('catalan')}>Catalan</button>
      </div>
      <div className="menu-content" style={{ display: 'flex', justifyContent: 'center' }}>
        <img 
          src={displayedImage} 
          alt="Menu" 
          style={imageStyle} 
          onClick={() => setZoomed(true)}
        />
      </div>
      <div className="menu-navigation">
        <button onClick={() => setViewStarters(!viewStarters)}>
          {viewStarters ? 'Back to Menu' : 'View Starters'}
        </button>
        <button onClick={() => window.location.href = '/'}>Home</button>
      </div>
      {zoomed && (
        <div 
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 999 }} 
          onClick={() => setZoomed(false)}
        >
          <img 
            src={displayedImage} 
            alt="Zoomed Menu" 
            style={zoomedImageStyle} 
          />
        </div>
      )}
    </div>
  );
};

export default Menu;
