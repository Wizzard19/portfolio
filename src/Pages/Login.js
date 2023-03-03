import React from 'react';
import '../styles/login.css';

export const getName = () => {
  const userName =
    document.getElementById('TBName').value.charAt(0).toUpperCase() +
    document.getElementById('TBName').value.slice(1);
  console.log(userName);
};

function Login() {
  return (
    <div className='background'>
      <div className='login-page'>
        <h1>Welcome</h1>
        <div className='form'>
          <input
            type='text'
            id='TBName'
            placeholder="What's your Name?"
            autoFocus
            required
          ></input>
          <button
            className='btn-submit'
            type='submit'
            onClick={getName}
            required
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
