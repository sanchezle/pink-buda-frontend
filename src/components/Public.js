import React from 'react';
import Navbar from './public_components/Navbar';
import Delivery from './public_components/Delivery';
import Footer from './public_components/Footer';
import Slideshow from './public_components/Slideshow';
import Locations from './public_components/Locations';

import './Public.css';

import image1 from './public_components/images/chispa.png';

import  image2 from './public_components/images/Asmashada1.png';

import image4 from './public_components/images/slideshow/image4.png';

import image5 from './public_components/images/slideshow/image5.png';

import image6 from './public_components/images/slideshow/image6.png';

import image7 from './public_components/images/slideshow/image7.png';

const images = [ image1,image2, image4];

const Public = () => {
  

  return (
    <div className="public" id="root">
      <Navbar />
      <div className="slideshow-wrapper">
        <Slideshow images={images} interval={3000} />
      
      </div>

     
      <Locations />
      

      <Delivery />
      
      <Footer />
    
    </div>
  );
}

export default Public;
