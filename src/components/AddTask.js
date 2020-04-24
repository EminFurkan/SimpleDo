import React, { useState } from 'react';
import moment from 'moment';
import { firebase } from '../firebase';
import { useSelectedProjectValue } from '../context';
import { SelectProject } from './SelectProject';
import { SelectDate } from './SelectDate';
import { SelectPriority } from './SelectPriority';
import { FiFlag, FiCalendar, FiList } from 'react-icons/fi';

export const AddTask = () => {
  const [task, setTask] = useState('');
  const [displayMainEditor, setDisplayMainEditor] = useState(false);
  const [project, setProject] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState('');
  const [displayDateMenu, setDisplayDateMenu] = useState(false);
  const [displayProjectMenu, setDisplayProjectMenu] = useState(false);
  const [displayPriorityMenu, setDisplayPriorityMenu] = useState(false);
  const { selectedProject } = useSelectedProjectValue();

  const addNewTask = () => {
    const projectId = project || selectedProject;
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
          date: filteredDate || date,
          priority: priority || '0',
          userId: '1'
        })
        .then(() => {
          setTask('');
          setProject('');
          setPriority('0');
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
            <div className="add-task__item-actions">
              <span
                onClick={() => setDisplayProjectMenu(!displayProjectMenu)}
              >
                <FiList />
              </span>
              <span
                onClick={() => setDisplayDateMenu(!displayDateMenu)}
              >
                <FiCalendar />
              </span>
              <span
                onClick={() => setDisplayPriorityMenu(!displayPriorityMenu)}
              >
                <FiFlag />
              </span>
            </div>
          </div>
        </div>
      )}
      <SelectProject 
        setProject={setProject}
        displayProjectMenu={displayProjectMenu}
        setDisplayProjectMenu={setDisplayProjectMenu}
      />
      <SelectDate
        setDate={setDate}
        displayDateMenu={displayDateMenu}
        setDisplayDateMenu={setDisplayDateMenu}
      />
      <SelectPriority
        setPriority={setPriority}
        displayPriorityMenu={displayPriorityMenu}
        setDisplayPriorityMenu={setDisplayPriorityMenu}
      />
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