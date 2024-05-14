import React from 'react'
import "./index.css";
import Home from "./routes/Home"
import About from "./routes/About"
import Admin from "./routes/Admin"
import Contact from "./routes/Contact"
import {Routes,Route}from"react-router-dom"
import Navbar from './Components/Navbar';
import SignUp from "./routes/SignUp"
export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
     <Route path = "/" element = {<Home/>}/>
     <Route path = "/about" element = {<About/>}/>
     <Route path = "/admin" element = {<Admin/>}/>
     <Route path = "/contact" element = {<Contact/>}/>
     <Route path = "/login" element = {<SignUp/>}/>
    </Routes>
    </>
  )
}
