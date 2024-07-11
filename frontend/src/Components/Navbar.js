import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { FaArrowDown, FaArrowRight, FaArrowUp, FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [click,setClick]=useState(false);
  const handleClick = () => setClick(!click);
  const[color,setColor]=useState(false)
  const [isOpen ,setIsOpen]  = useState (false);
    const handledown = () => setIsOpen (!isOpen);
  
  const changeColor = () =>{
    if(window.scrollY>=100){
      setColor(true)
    }else{
      setColor(false);
    }
  }
  window.addEventListener("scroll",changeColor)
  return (
    <div className={color ? "header header-bg":"header"}>
        <Link to = "/">
        <h1 className='logo'>Wo-safe</h1>
        </Link>
      <ul className={click?"nav-menu active":"nav-menu"}>
        <li>
            <Link to ="/">Home</Link>
        </li>
        <li>
        <Link to ="/about">About</Link>
        </li>
        <li>
          <Link to = "/complaints">Complaints 
          </Link>  
            <div onClick={handledown} className='list'>
            {isOpen ? (<FaArrowDown style={{width:"40px",color:"white",
              marginLeft: "106px",
              transform:"translateY(-20px)"
            }}/>):(
             <FaArrowUp  style={{
              width:"40px",color:"white",
              marginLeft: "110px",
              transform:"translateY(-20px)"}}
/>            )}
           <ul className={isOpen ?'nav-down active ':'navdown' }>
              <li>Complaints</li><br/>
              <li>Complaints</li><br/>
              <li>Complaints</li><br/>
            </ul>
            </div>
        </li>
        <li>
        <Link to ="/contact">Contact</Link>
        </li>
        <li>
        <Link to = "/login">Login</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click? (<FaTimes size={20} style={{color:"white"}}/>):(
          <FaBars size={20} style={{color:"white"}}/>
        )
        }
      </div>
    </div>
  )
}
