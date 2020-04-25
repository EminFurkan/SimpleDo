import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {
  const [user, setUser] = useState({})

  const onSubmit = () => {
    console.log('test')
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
          <h2>Sign up</h2>
        </div>
        <form onSubmit={onSubmit}>
          <label>Email</label>
          <input type="email" name="email" />
          <label>Your name</label>
          <input type="text" name="name" />
          <label>Password</label>
          <input type="password" name="password" />
          <button>Sign up with Email</button>
        </form>
        <footer>
          <p>
            Already signed up? &nbsp;
            <Link to="/users/showLogin" style={{ textDecoration: 'none' }}>
              <span>Go to login</span>
            </Link>
          </p>
        </footer>
      </div>
    </div>
  )
}
