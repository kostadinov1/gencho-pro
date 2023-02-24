import React from 'react'
import './login.css'

function Login() {
  return (
    <section className='login'>
        <div className='form-box'>
            <h1>Login here</h1>
            <form>
                <input type={'email'} placeholder='Email'></input>
                <input type={'password'} placeholder='Password'></input>
                <button>login</button>
            </form>
        </div>
    </section>
  )
}

export default Login
