import React from 'react'
import { Link } from "react-scroll";
function Offer() {
  return (
    <div id="offer">
        <div className="pr-heading">
            <h1>A BIG <span>OFFER</span> FOR THIS SUMMER</h1>
            <p className="details">Lorem ipsum dolor sit amet consetetur adipisicing</p>
            <div className="pr-btns">
                <a href="#" className='pr-btn'><Link to="contact" smooth={true} duration={1000}>JOIN NOW</Link></a>
            </div>
        </div>
    </div>
  )
}

export default Offer;