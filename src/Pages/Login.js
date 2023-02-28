
import React from 'react'
import '../styles/login.css'

function Login() {
  return (
    <div className='login-page'>
      <h1>Welcome</h1>
      <div className='form'>
          <input type='text' id='TBName' placeholder="What's your Name?" autoFocus></input>
          <button className='btn-submit' type='submit'>Submit</button>
      </div>
  
      </div>
  )
}

export default Login