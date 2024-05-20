import React from 'react';
import Navbar from './public_components/Navbar';
import Delivery from './public_components/Delivery';
import Footer from './public_components/Footer';
import Carta from './public_components/Carta';
import './Public.css';

const Public = () => {
  return (
    <div className="public">
      <Navbar />
    
      <Carta />
      <Delivery />
      <Footer />
    
    </div>
  );
}

export default Public;
