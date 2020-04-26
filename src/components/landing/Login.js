import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { firebase } from '../../firebase';

export const Login = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then(() => {
        console.log('you have logged in');
        return <Redirect to="/app" />;
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
