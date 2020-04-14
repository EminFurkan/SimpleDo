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

export const Sidebar = () => {
  const { selectedProject } = useSelectedProjectValue;
  const [active, setActive] = useState('INBOX');
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar">
      <ul className="sidebar__generic">
        <li className="inbox">
          <div>
            <span>
              <FaInbox />
            </span>
            <span>Inbox</span>
          </div>
        </li>
        <li className="today">
          <div>
            <span>
              <FaRegCalendar />
            </span>
            <span>Today</span>
          </div>
        </li>
        <li className="next_7">
          <div>
            <span>
              <FaRegCalendarAlt />
            </span>
            <span>Next 7 days</span>
          </div>
        </li>
      </ul>
      <div className="sidebar__middle">
        <span>
          <FaChevronDown />
        </span>
        <h2>Projects</h2>
      </div>
        { showProjects && <ProjectList /> }
        { <AddProject /> }
    </div>
  )
}