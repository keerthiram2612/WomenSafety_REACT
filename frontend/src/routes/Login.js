import React, { useState } from 'react'
import "../Components/Loginstyle.css"
import axios from "axios"

function Login() {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  function handleSubmit(event){
    event.preventDefault();
    axios.post('http://localhost:8081/login',{email,password})
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
  }
  
  return (
    <div className='login-page'>
      <div>
        <form onSubmit={handleSubmit}className="form"action=''>
           
           <div className='login-values'>
            <div className='email'>
                <label htmlFor='email'>Email</label>
                <input className="email"type='email' placeholder='Enter Email'
                onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type='password' placeholder='Enter Password'
                 onChange={e=>setPassword(e.target.value)}/>
            </div>
            <button>Login</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
