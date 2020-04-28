import React from 'react';
import { firebase } from '../firebase';
import { IoMdCheckmark } from 'react-icons/io';

export const Checkbox = ({ id, priority, completed }) => {
  const archiveTask = () => {
    firebase.firestore().collection('tasks').doc(id).update({
      isArchived: true
    });
  };

  return (
    <div className="checkbox-container" onClick={() => archiveTask()}>
      <span className={`checkbox__${priority} ${completed}`}>
        <IoMdCheckmark />
      </span>
    </div>
  );
};
