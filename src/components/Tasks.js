import React, { useEffect } from 'react'
import { useTasks } from '../hooks';
import { filteredTasks } from '../constants';
import { Checkbox } from './Checkbox';
import { getTitle, getFilteredTitle, filteredTasksExist } from '../utils';
import { useSelectedProjectValue, useProjectsValue } from '../context';

export const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();
  const { tasks } = useTasks(selectedProject);
  
  let projectName = '';

  if (filteredTasksExist(selectedProject) && selectedProject) {
    projectName = getFilteredTitle(filteredTasks, selectedProject).name;
  }

  if (
    projects &&
    projects.length > 0 &&
    selectedProject &&
    !filteredTasksExist(selectedProject)
  ) {
    projectName = getTitle(projects, selectedProject);
  }

  useEffect(() => {
    document.title = `${projectName}: SimpleDo`;
  });

  return (
    <div className="tasks">
      <h2>{ projectName }</h2>
      <ul className="tasks__list">
        {tasks.map(task => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} />
            <span>{ task.task }</span>
          </li>
        ))}
      </ul>
    </div>
  )
}