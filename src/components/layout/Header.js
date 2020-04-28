import React, { useState } from 'react';
import { GoPlus, GoSync } from 'react-icons/go';
import { FaBars } from 'react-icons/fa';
import { IoMdPower } from 'react-icons/io';
import { firebase } from '../../firebase';
import { QuickAddTask } from '../QuickAddTask';

export const Header = ({
  displaySidebar,
  setDisplaySidebar,
  darkMode,
  setDarkMode
}) => {
  const [displayQuickAdd, setDisplayQuickAdd] = useState(false);

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
            <li
              className="actions__add"
              onClick={() => setDisplayQuickAdd(!displayQuickAdd)}
            >
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
      {displayQuickAdd && (
        <QuickAddTask setDisplayQuickAdd={setDisplayQuickAdd} />
      )}
    </header>
  );
};
