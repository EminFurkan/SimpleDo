import React from 'react'
import { useTasks } from '../hooks';
import { filteredTasks } from '../constants';
import { Checkbox } from './Checkbox';

export const Tasks = () => {
  const { tasks } = useTasks('1');

  console.log(tasks);

  let projectName = '';

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