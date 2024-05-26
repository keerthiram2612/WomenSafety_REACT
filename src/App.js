import React from 'react'
import "./index.css";
import Home from "./routes/Home"
import About from "./routes/About"
import Complaints from "./routes/Complaints"
import Contact from "./routes/Contact"
import {Routes,Route}from"react-router-dom"
import SignUp from "./routes/SignUp"
export default function App() {
  return (
    <>
    <Routes>
     <Route path = "/" element = {<Home/>}/>
     <Route path = "/about" element = {<About/>}/>
     <Route path = "/complaints" element = {<Complaints/>}/>
     <Route path = "/contact" element = {<Contact/>}/>
     <Route path = "/login" element = {<SignUp/>}/>
    </Routes>
    </>
  )
}
