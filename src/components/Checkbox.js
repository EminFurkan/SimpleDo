import React from 'react';
import { firebase } from '../firebase';
import { IoMdCheckmark } from 'react-icons/io'

export const Checkbox = ({ id }) => {
  const archiveTask = () => {
    firebase
      .firestore()
      .collection('tasks')
      .doc(id)
      .update({
        isArchived: true,
      });
  }

  return (
    <div
      className="checkbox-container"
      onClick={() => archiveTask()}
    >
      <span className="checkbox">
        <IoMdCheckmark />
      </span>
    </div>
  )
}