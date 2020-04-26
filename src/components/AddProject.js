import React, { useState } from 'react';
import { firebase } from '../firebase';
import { generatePushId } from '../utils';
import { useProjectsValue } from '../context';
import { useAuthValue } from '../context';

export const AddProject = () => {
  const [displayInput, setDisplayInput] = useState(false);
  const [projectName, setProjectName] = useState('');
  const { projects, setProjects } = useProjectsValue();
  const projectId = generatePushId();
  const { currentUser } = useAuthValue();

  const addNewProject = () => {
    projectName &&
      firebase
        .firestore()
        .collection('projects')
        .add({
          projectId,
          name: projectName,
          userId: 'Z0VotxJuCwNnYWOyMEyUX8aIrVp1'
        })
        .then(() => {
          setProjects([...projects]);
          setProjectName('');
          setDisplayInput(false);
        });
  };

  return (
    <div className="add-project">
      {displayInput && (
        <div className="add-project__input">
          <label>Add New Project</label>
          <input type="text" onChange={(e) => setProjectName(e.target.value)} />
          <div className="add-project__input-actions">
            <button
              className="add-project__submit"
              onClick={() => addNewProject()}
            >
              Add
            </button>
            <span
              className="add-project__cancel"
              onClick={() => setDisplayInput(false)}
            >
              Cancel
            </span>
          </div>
        </div>
      )}
      <p onClick={() => setDisplayInput(!displayInput)}>
        <span className="add-project__plus">+</span> Add Project
      </p>
    </div>
  );
};
