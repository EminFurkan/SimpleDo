import React, { useState } from 'react';
import moment from 'moment';
import { firebase } from '../firebase';
import { useSelectedProjectValue } from '../context';


export const AddTask = () => {
  const [task, setTask] = useState('');
  const [displayMainEditor, setDisplayMainEditor] = useState(false);
  const { selectedProject } = useSelectedProjectValue();

  const addNewTask = () => {
    const projectId = selectedProject;
    let filteredDate = '';

    if (projectId === 'TODAY'){
      filteredDate = moment().format('DD/MM/YYYY');
    } else if (projectId === 'NEXT_7'){
      filteredDate = moment()
        .add(7, 'days')
        .format('DD/MM/YYYY');
    }
    return (
      task && projectId &&
      firebase
        .firestore()
        .collection('tasks')
        .add({
          isArchived: false,
          projectId,
          task,
          date: filteredDate,
          userId: '1'
        })
        .then(() => {
          setTask('');
        })
    )
  }

  return (
    <div className="add-task">
      {displayMainEditor && (
        <div className="add-task__editor">
          <input
            className="add-task__content"
            onChange={e => setTask(e.target.value)}
            type="text"
            value={task}
            onKeyDown={e => {
              if (e.key === 'Enter'){
                addNewTask();
              }
            }}
          />
          <div
            className="add-task__actions"
          >
            <button
              className="add-task__submit"
              onClick={() => addNewTask()}
            >
              Add Task
            </button>
            <span
              className="add-task__cancel"
              onClick={() => {
                setDisplayMainEditor(false);
                setTask('');
              }}
            >
              Cancel
            </span>
          </div>
        </div>
      )}
      {!displayMainEditor && (
        <div
          className="add-task__action"
          onClick={() => setDisplayMainEditor(!displayMainEditor)}
        >
          <p><span className="add-task__plus">+</span> Add task</p>
        </div>
      )}
    </div>
  )
}