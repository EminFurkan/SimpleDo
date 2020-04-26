import React from 'react';
import { GoPlus, GoSync } from 'react-icons/go';
import { FaBars } from 'react-icons/fa';
import { IoMdPower } from 'react-icons/io';
import { firebase } from '../../firebase';


export const Header = ({
  displaySidebar,
  setDisplaySidebar,
  darkMode,
  setDarkMode
}) => {
  return (
    <header className="header">
      <nav>
        <div
          className="set-display"
          onClick={() => setDisplaySidebar(!displaySidebar)}
        >
          <button>
            <FaBars />
          </button>
        </div>
        <div className="actions">
          <ul>
            <li className="actions__add">
              <button>
                <GoPlus />
              </button>
            </li>
            <li
              className="actions__darkmode"
              onClick={() => setDarkMode(!darkMode)}
            >
              <button>
                <GoSync />
              </button>
            </li>
            <li
              className="actions__signout"
              onClick={() => firebase.auth().signOut()}
            >
              <button>
                <IoMdPower />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
