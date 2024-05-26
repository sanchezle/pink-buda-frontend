import React from 'react';
import Navbar from './public_components/Navbar';
import Delivery from './public_components/Delivery';
import Footer from './public_components/Footer';
import Slideshow from './public_components/Slideshow';
import Locations from './public_components/Locations';
import Cover from './public_components/Cover'; 
import AboutPage from './public_components/AboutPage'; 

import './Public.css';

import image1 from './public_components/images/slideshow/image1.png';
import image2 from './public_components/images/slideshow/image2.png';
import image3 from './public_components/images/slideshow/image3.png';


import image4 from './public_components/images/slideshow/image4.png';

import image5 from './public_components/images/slideshow/image5.png';

import image6 from './public_components/images/slideshow/image6.png';



const images = [ image1,image2,image3, image4, image5, image6];

const Public = () => {
  

  return (
    <div className="public" id="root">
      <Navbar />
      <Cover/>
      <AboutPage />
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
