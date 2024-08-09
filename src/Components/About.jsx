import React from 'react';
import aboutImage from '../images/about.png';

function About() {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutImage} alt="" />
      </div>
      <div className="about-text">
        <h1>ABOUT US</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit corporis vero eius, vel quibusdam possimus quo et temporibus eos dignissimos officiis voluptatibus sed, non assumenda!</p>
        <button>LEARN MORE</button>
      </div>
    </div>
  );
}

export default About;
