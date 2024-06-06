import React, { useState } from 'react'
import "../Components/Loginstyle.css"
function Login() {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  return (
    <div className='login-page'>
      <div>
        <form className="form"action=''>
           
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
