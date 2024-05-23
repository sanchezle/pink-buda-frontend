import React, { useState } from 'react';

import es1 from './images/menu/menu-es1.jpg';
import es2 from './images/menu/menu-es2.jpg';
import en1 from './images/menu/menu-english12.jpg';
import en2 from './images/menu/menu-english222.jpg';
import cat1 from './images/menu/menu-catala12.jpg';
import cat2 from './images/menu/menu-catala22.jpg';

const menuCatalan = [cat1, cat2];
const menuEnglish = [en1, en2];
const menuSpanish = [es1, es2];

const Menu = () => {
  const [language, setLanguage] = useState('spanish');
  const [viewStarters, setViewStarters] = useState(false);

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

  return (
    <div className="menu-container">
      <div className="menu-buttons">
        <button onClick={() => setLanguage('spanish')}>Spanish</button>
        <button onClick={() => setLanguage('english')}>English</button>
        <button onClick={() => setLanguage('catalan')}>Catalan</button>
      </div>
      <div className="menu-content">
        <img src={displayedImage} alt="Menu" />
      </div>
      <div className="menu-navigation">
        <button onClick={() => setViewStarters(!viewStarters)}>
          {viewStarters ? 'Back to Menu' : 'View Starters'}
        </button>
        <button onClick={() => window.location.href = '/'}>Home</button>
      </div>
    </div>
  );
};

export default Menu;
