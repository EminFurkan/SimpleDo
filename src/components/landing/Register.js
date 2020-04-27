import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { firebase } from '../../firebase';
import { MdError } from 'react-icons/md';

export const Register = ({ history }) => {
  const [displayError, setDisplayError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password, name } = e.target.elements;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value)
      .then((res) => {
        firebase.firestore().collection('users').add({
          userId: res.user.uid,
          name: name.value,
          email: email.value,
          password: password.value
        });
        history.push('/users/showLogin');
      })
      .catch((err) => {
        setDisplayError(true);
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
          <h2>Sign up</h2>
        </div>
        <form onSubmit={onSubmit}>
          <label>Email</label>
          <input type="email" name="email" autoComplete="on" />
          <label>Your name</label>
          <input type="text" name="name" autoComplete="on" />
          <label>Password</label>
          <input type="password" name="password" autoComplete="on" />
          <button>Sign up with Email</button>
        </form>
        {displayError && (
          <span className="error-message" style={{ top: '68%' }}>
            <MdError /> <p>Whoops. Something went wrong.</p>
          </span>
        )}
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
  );
};
