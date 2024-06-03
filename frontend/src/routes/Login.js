import React from 'react'
import "../Components/Loginstyle.css"
function Login() {
  return (
    <div className='login-page'>
      <div>
        <form className="form"action=''>
           
           <div className='login-values'>
            <div className='email'>
                <label htmlFor='email'>Email</label>
                <input className="email"type='email' placeholder='Enter Email'/>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type='password' placeholder='Enter Password'/>
            </div>
            <button>Login</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
