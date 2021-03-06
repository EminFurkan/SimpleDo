import React from 'react';
import { useProjectsValue } from '../context';

export const SelectProject = ({
  setProject,
  displayProjectMenu,
  setDisplayProjectMenu
}) => {
  const { projects } = useProjectsValue();

  return (
    projects &&
    displayProjectMenu && (
      <div className="add-task__select-project">
        <ul className="select-project__list">
          {projects.map((project) => (
            <li
              key={project.projectId}
              onClick={() => {
                setProject(project.projectId);
                setDisplayProjectMenu(false);
              }}
            >
              {project.name}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};
