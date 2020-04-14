import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useProjectsValue, useSelectedProjectValue } from '../context';
import { firebase } from '../firebase';

export const Project = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [active, setActive] = useState(null);
  const { projects, setProjects } = useProjectsValue();
  const { setSelectedProject } = useSelectedProjectValue();

  const deleteProject = docId => {
    firebase
      .firestore()
      .collection('projects')
      .doc(docId)
      .delete()
      .then(() => {
        setProjects([...projects]);
        setSelectedProject('INBOX');
      })
  }
  return (
    projects && projects.map(
      project => (
      <li
        key={project.projectId}
        data-doc-id={project.docId}
        className={
          active === project.projectId ?
          'active sidebar__project'
          : 'sidebar__project'
        }
        onClick={() => {
          setActive(project.projectId);
          setSelectedProject(project.projectId);
      }}
      >
        <span className="sidebar__dot"></span>
        <span className="sidebar__project-name">{ project.name }</span>
        <span
          className="sidebar__project-delete"
          onClick={() => setShowConfirm(!showConfirm)}
        >
          <FaTrashAlt className="sidebar__icon" />
          {showConfirm && (
            <div className="project-delete-modal">
              <div className="project-delete-modal__inner">
                <p>Are you sure you want to delete: <span
                  className="name"
                >
                  {project.name}</span>
                </p>
                <div className="project-delete-modal__actions">
                  <button
                    type="button"
                    onClick={() => deleteProject(project.docId)}
                  >
                    Delete
                  </button>
                  <span
                    onClick={() => setShowConfirm(!showConfirm)}
                  >
                    Cancel
                  </span>
                </div>
              </div>
            </div>
          )}
        </span>
      </li>
      )
    )
  )
}