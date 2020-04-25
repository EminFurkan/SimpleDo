import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  const [user, setUser] = useState({})

  const onSubmit = () => {
    console.log('login')
  }

  return (
    <div className="register">
      <div className="register__container">
        <div className="logo">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span>
              <img src="/images/logo.svg" alt="logo" />
              <h1>simpledo</h1>
            </span>
          </Link>
          <h2>Log in</h2>
        </div>
        <form onSubmit={onSubmit}>
          <label>Email</label>
          <input type="email" name="email" />
          <label>Password</label>
          <input type="password" name="password" />
          <button>Log in</button>
          <span className="checkbox">
            <input type="checkbox" />
            <p>Keep me logged in?</p>
          </span>
        </form>
        <footer>
          <p>
            Don't have an account? &nbsp;
            <Link to="/users/showRegister" style={{ textDecoration: 'none' }}>
              <span>Sign up</span>
            </Link>
          </p>
        </footer>
      </div>
    </div>
  )
}
