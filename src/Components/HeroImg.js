import React, { useState } from 'react'
import "./HomeContentstyle.css"
import WomenPic from "../assets/womensafetypic.png"
export default function HeroImg() {
  const handleClick=()=>{
    window.location.href="https://www.google.com/maps/@13.0925053,80.2432831,15z?entry=ttu"
  }
  const[show,setShow]= useState(true);
  return (
    <div className='home'>
      <div className='image-home'>
       <img className='women-pic'src={WomenPic} alt='WomenPic'/>
      </div>
      <div className='container'>
      <h1 className='home-h1'>WomenSafety</h1><br/>
      <p className='home-p'>This application tracks and gives the suggestion for the people which is the right 
        place and gives the notification in critical situation by the current location.
      </p>
      <button onClick={handleClick}>Location</button>
      </div>
    </div>
  )
}

