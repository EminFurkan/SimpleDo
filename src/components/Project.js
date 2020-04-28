import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useProjectsValue, useSelectedProjectValue } from '../context';
import { firebase } from '../firebase';

export const Project = () => {
  const [displayConfirm, setDisplayConfirm] = useState(false);
  const [active, setActive] = useState(null);
  const { projects, setProjects } = useProjectsValue();
  const { setSelectedProject } = useSelectedProjectValue();

  const deleteProject = (docId) => {
    firebase
      .firestore()
      .collection('projects')
      .doc(docId)
      .delete()
      .then(() => {
        setProjects([...projects]);
        setSelectedProject('INBOX');
      });
  };
  return (
    projects &&
    projects.map((project) => (
      <li
        key={project.projectId}
        data-doc-id={project.docId}
        className={
          active === project.projectId
            ? 'active sidebar__project'
            : 'sidebar__project'
        }
        onClick={() => {
          setActive(project.projectId);
          setSelectedProject(project.projectId);
        }}
      >
        <span className="sidebar__dot"></span>
        <span className="sidebar__project-name">{project.name}</span>
        <span
          className="sidebar__project-delete"
          onClick={() => setDisplayConfirm(!displayConfirm)}
        >
          <FaTrashAlt className="sidebar__icon" />
          {displayConfirm && (
            <div className="delete-project">
              <div className="delete-project__modal">
                <span className="delete-project__modal-text">
                  <p>
                    Are you sure you want to delete: <span>{project.name}</span>
                  </p>
                </span>
                <span className="delete-project__modal-actions">
                  <button
                    onClick={() => {
                      deleteProject(project.docId);
                      setDisplayConfirm(false);
                    }}
                  >
                    Delete
                  </button>
                  <span onClick={() => setDisplayConfirm(false)}>Cancel</span>
                </span>
              </div>
            </div>
          )}
        </span>
      </li>
    ))
  );
};
