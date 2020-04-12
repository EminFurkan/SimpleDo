import React from 'react';
import { firebase } from '../firebase';

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
      className="checkbox-holder"
      onClick={() => archiveTask()}
    >
      <span className="checkbox" />
    </div>
  )
}