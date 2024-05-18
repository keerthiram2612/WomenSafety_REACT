import React from 'react'
import "./HomeContentstyle.css"
import WomenPic from "../assets/womensafetypic.png"
export default function HeroImg() {
  return (
    <div className='home'>
      <div className='image-home'>
       <img className='women-pic'src={WomenPic} alt='WomenPic'/>
      </div>
      <h1>WomenSafety</h1>
    </div>
  )
}

