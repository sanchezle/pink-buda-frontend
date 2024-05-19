import React from 'react'
import './Public.css'
import Navbar from './public _components/Navbar'
import Hero from './public _components/Hero'
import Footer from './public _components/Footer'
import Carta from './public _components/Carta'

import Delivery from './public _components/Delivery'


function Public() {
  return (
    <div className='Public'>
      <Navbar />
      <Hero />
      <Carta />
    
      <Delivery />
      <Footer />

    </div>
  );
}

export default Public;
