import React from 'react';
import { GiCycle } from 'react-icons/gi';
import { GoPlus } from 'react-icons/go';
import { FaBars } from 'react-icons/fa';

export const Header = ({ displaySidebar, setDisplaySidebar }) => {
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
            <li className="actions__darkmode">
              <button>
                <GiCycle />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}