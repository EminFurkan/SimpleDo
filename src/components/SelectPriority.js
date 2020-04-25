import React from 'react';
import { FiFlag } from 'react-icons/fi';

export const SelectPriority = ({
  displayPriorityMenu,
  setDisplayPriorityMenu,
  setPriority
}) =>
  displayPriorityMenu && (
    <div className="add-task__select-priority">
      <ul className="select-priority__list">
        <li
          onClick={() => {
            setPriority('1');
            setDisplayPriorityMenu(false);
          }}
        >
          <FiFlag />
          <span>Priority 1</span>
        </li>
        <li
          onClick={() => {
            setPriority('2');
            setDisplayPriorityMenu(false);
          }}
        >
          <FiFlag />
          <span>Priority 2</span>
        </li>
        <li
          onClick={() => {
            setPriority('3');
            setDisplayPriorityMenu(false);
          }}
        >
          <FiFlag />
          <span>Priority 3</span>
        </li>
        <li
          onClick={() => {
            setDisplayPriorityMenu(false);
          }}
        >
          <FiFlag />
          <span>Priority 4</span>
        </li>
      </ul>
    </div>
  );
