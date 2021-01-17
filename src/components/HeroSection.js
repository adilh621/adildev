import React from 'react';
import '../App.css';
import './HeroSection.css';
import Typical from 'react-typical'

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>Adil Hussain</h1>
       
      <div className='hero-btns'>

      </div>
      <Typical
        steps={['Full Stack Developer', 2000, 'Tech Enthusiast', 2000]}
        loop={Infinity}
        wrapper="p"
      />
      
    </div>
  );
}

export default HeroSection;
