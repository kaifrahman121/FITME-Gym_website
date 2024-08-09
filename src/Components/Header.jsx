import React from 'react';
import { Link } from "react-scroll";
function Header() {
  return (
    <div id="main">
        <div className="header-heading">
            <h2>STEP UP YOUR</h2>
            <h1><span className="game">GAME</span> WITH US</h1>
            <p className="details">Build Your Body And Fitness With Professional Help</p>
            <div className='header-btns'>
                <a href="#contact" className="header-btn"><Link to="contact" smooth={true} duration={1000}>GET STARTED</Link></a>
            </div>
        </div>
    </div>
  )
}

export default Header;