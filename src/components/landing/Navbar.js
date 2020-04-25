import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header className="landing-header">
      <nav className="nav">
        <div className="landing-logo">
          <img src="/images/logo.svg" alt="simpledo" />
          <h2>simpledo</h2>
        </div>
        <div className="landing-actions">
          <ul>
            <li className="login">
              <Link to="users/showLogin">
                <button>Login</button>
              </Link>
            </li>
            <li className="signup">
              <Link to="/users/showRegister">
                <button>Sign up</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
