import React, { useState } from 'react';
import moment from 'moment';
import { firebase } from '../firebase';
import { MdClose } from 'react-icons/md';
import { useSelectedProjectValue, useAuthValue } from '../context';

export const QuickAddTask = ({ setDisplayQuickAdd }) => {
  const { selectedProject } = useSelectedProjectValue();
  const { currentUser } = useAuthValue();
  const [task, setTask] = useState('');

  const addNewTask = () => {
    const projectId = selectedProject;
    // let filteredDate = '';

    // if (projectId === 'TODAY') {
    //   filteredDate = moment().format('DD/MM/YYYY');
    // } else if (projectId === 'NEXT_7') {
    //   filteredDate = moment().add(7, 'days').format('DD/MM/YYYY');
    // }
    return (
      task &&
      projectId &&
      firebase
        .firestore()
        .collection('tasks')
        .add({
          isArchived: false,
          projectId,
          task,
          userId: currentUser.uid,
          priority: '0',
          date: ''
        })
        .then(() => {
          setTask('');
          // setProject('');
          // setPriority('0');
        })
    );
  };

  return (
    <div className="quick-add-task__overlay"
      onClick={() => setDisplayQuickAdd(false)}
    >
      <div className="quick-add-task__overlay-modal"
        onClick={e => e.stopPropagation()}
      >
        <span className="quick-add-task__overlay-modal-text">
          <p>Quick Add Task</p>
          <span onClick={() => setDisplayQuickAdd(false)}>
            <MdClose />
          </span>
        </span>
        <input
          type="text"
          onChange={(e) => setTask(e.target.value)}
          value={task}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addNewTask();
              setDisplayQuickAdd(false);
            }
          }}
        />
        <div className="quick-add-task__overlay-modal-actions">
          <button
            onClick={() => {
              addNewTask();
              setDisplayQuickAdd(false);
            }}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};
