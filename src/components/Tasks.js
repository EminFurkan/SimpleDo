import React, { useEffect, useState } from 'react';
import { useTasks } from '../hooks';
import { filteredTasks } from '../constants';
import { Checkbox } from './Checkbox';
import { getTitle, getFilteredTitle, filteredTasksExist } from '../utils';
import { useSelectedProjectValue, useProjectsValue } from '../context';
import { AddTask } from './AddTask';
import { AiOutlineSetting } from 'react-icons/ai';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

export const Tasks = ({ darkMode, displaySidebar }) => {
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();
  const { tasks, archivedTasks } = useTasks(selectedProject);
  const [displaySettings, setDisplaySettings] = useState(false);
  const [displayArchivedTasks, setDisplayArchivedTasks] = useState(false);

  let projectName = '';

  if (filteredTasksExist(selectedProject) && selectedProject) {
    projectName = getFilteredTitle(filteredTasks, selectedProject).value;
  }

  if (
    projects &&
    projects.length > 0 &&
    selectedProject &&
    !filteredTasksExist(selectedProject)
  ) {
    projectName = getTitle(projects, selectedProject).name;
  }

  useEffect(() => {
    document.title = `${projectName}: SimpleDo`;
  });

  return (
    <div
      className="tasks"
      style={!displaySidebar ? { marginLeft: 0 } : { marginLeft: '320px' }}
    >
      <div className="tasks__container">
        <div className="tasks__title">
          <h2>{projectName}</h2>
          {projectName === 'Inbox' && (
            <span onClick={() => setDisplaySettings(!displaySettings)}>
              <AiOutlineSetting />
              {displaySettings && (
                <div
                  className="show-completed"
                  onClick={() => setDisplayArchivedTasks(!displayArchivedTasks)}
                >
                  <span className="pointer"></span>
                  <span>
                    <IoIosCheckmarkCircleOutline />
                    <p>Show completed tasks</p>
                  </span>
                </div>
              )}
            </span>
          )}
        </div>
        <ul className="tasks__list">
          {tasks.map((task) => (
            <li key={`${task.id}`}>
              <Checkbox id={task.id} priority={task.priority} />
              <span>{task.task}</span>
            </li>
          ))}
          {displayArchivedTasks &&
            projectName === 'Inbox' &&
            archivedTasks.map((archivedTask) => (
              <li
                key={archivedTask.id}
                priority={archivedTask.priority}
                style={{ opacity: '.4', textDecoration: 'line-through' }}
              >
                <Checkbox
                  id={archivedTask.id}
                  priority={archivedTask.priority}
                  completed={'completed'}
                />
                <span>{archivedTask.task}</span>
              </li>
            ))}
          <AddTask />
          {tasks.length === 0 || archivedTasks.length === 0 ? (
            <div className="empty-state-illustration">
              <img
                src={
                  darkMode
                    ? require('../assets/coffee-dm.png')
                    : require('../assets/coffee.png')
                }
                alt="state-illustration"
              />
              <p>What will you accomplish?</p>
            </div>
          ) : undefined}
        </ul>
      </div>
    </div>
  );
};
