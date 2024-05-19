import React from 'react'
import './Hero.css'
import video1 from './images/video-cover.mp4'
const Hero = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted className="heroVideo">
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default Hero
