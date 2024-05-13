import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='header'>
     
        <h1>Wosafe</h1>
      <ul className='nav-menu'>
        <li>
            <Link to ="/">Home</Link>
        </li>
        <li>
        <Link to ="/about">About</Link>
        </li>
        <li>
          <Link to = "/admin">Admin</Link>
        </li>
        <li>
        <Link to ="/contact">Contact</Link>
        </li>
        <li>
        <Link to = "/signin">SigIn</Link>
        </li>
      </ul>
    </div>
  )
}
