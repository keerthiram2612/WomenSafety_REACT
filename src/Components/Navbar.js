import React from 'react'
import "./Navbar.css"
export default function Navbar() {
  return (
    <div className='header'>
   
        <h1>Wosafe</h1>
      <ul className='nav-menu'>
        <li>
            Home
        </li>
        <li>
            About
        </li>
        <li>
            Admin
        </li>
        <li>
            Contact
        </li>
      </ul>
    </div>
  )
}
