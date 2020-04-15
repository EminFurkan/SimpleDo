import React, { useState } from 'react';
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from 'react-icons/fa';
import { useSelectedProjectValue } from '../../context';
import { ProjectList } from '../ProjectList';
import { AddProject } from '../AddProject';

export const Sidebar = ({ displaySidebar, setDisplaySidebar }) => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState('inbox');
  const [displayProjects, setDisplayProjects] = useState(true);

  return (
    <div className={displaySidebar ? 'sidebar' : 'sidebar display-off'}>
      <ul className="sidebar__generic">
        <li className="inbox active">
          <div
            onClick={() => {
              setActive('inbox');
              setSelectedProject('INBOX');
            }}
          >
            <span>
              <FaInbox />
            </span>
            <span>Inbox</span>
          </div>
        </li>
        <li className="today">
          <div
            onClick={() => {
              setActive('today');
              setSelectedProject('TODAY');
            }}
          >
            <span>
              <FaRegCalendar />
            </span>
            <span>Today</span>
          </div>
        </li>
        <li className="next_7">
          <div
            onClick={() => {
              setActive('next_7');
              setSelectedProject('NEXT_7');
            }}
          >
            <span>
              <FaRegCalendarAlt />
            </span>
            <span>Next 7 days</span>
          </div>
        </li>
      </ul>
      <div 
        className="sidebar__middle"
        onClick={() => setDisplayProjects(!displayProjects)}
      >
        <span>
          <FaChevronDown
            className={!displayProjects ? 'hide-projects' : undefined}
           />
        </span>
        <h2>Projects</h2>
      </div>
        { displayProjects && <ProjectList /> }
        { <AddProject /> }
    </div>
  )
}