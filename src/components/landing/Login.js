import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { firebase } from '../../firebase';
import { useAuthValue } from '../../context';
import { MdError } from 'react-icons/md';

export const Login = () => {
  const { currentUser } = useAuthValue();
  const [displayError, setDisplayError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .catch((err) => {
        setDisplayError(true);
      });
  };

  if (currentUser) {
    return <Redirect to="/app" />;
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
          <input type="email" name="email" autoComplete="on" />
          <label>Password</label>
          <input type="password" name="password" autoComplete="on" />
          <button>Log in</button>
          <span className="checkbox">
            <input type="checkbox" />
            <p>Keep me logged in?</p>
          </span>
        </form>
        {displayError && (
          <span className="error-message">
            <MdError /> <p>Whoops. Invalid Email or Password.</p>
          </span>
        )}
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
  );
};
