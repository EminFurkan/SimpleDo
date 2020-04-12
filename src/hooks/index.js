import { useState, useEffect } from 'react';
import { firebase } from '../firebase';
import { filteredTasksExist } from '../utils';
import moment from 'moment';

export const useTasks = selectedProject => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    // Fetching 'tasks' collection based on userId from db
    let unsubscribe = firebase
      .firestore()
      .collection('tasks')
      .where('userId', '==', '1');
    // Checking if selectedProject is an id (user defined projects have id's)
    // or a pre-defined (filtered) project class such as 'TODAY' 'INBOX' 'NEXT_7'
    unsubscribe = selectedProject && !filteredTasksExist(selectedProject) ?
    // IF it's an id then fetch all the tasks that belong to that project id
    unsubscribe = unsubscribe.where('projectId', '==', selectedProject)
    // IF it's 'TODAY' then fetch all the tasks that are due today's date
    : selectedProject === 'TODAY' ?
    unsubscribe = unsubscribe.where(
      'date', '==', moment().format('DD/MM/YYYY')
    )
    // IF it's INBOX then fetch all the tasks with no date assigned
    : selectedProject === 'INBOX' || selectedProject === 0 ?
    unsubscribe = unsubscribe.where('date', '==', '')
    : unsubscribe;

    unsubscribe = unsubscribe.onSnapshot(snapshot => {
      const newTasks = snapshot.docs.map(task => ({
        id: task.id,
        ...task.data(),
      }));
      // IF it's 'NEXT_7' fetch all the tasks that are due within the next 7 days
      // that aren't archived
      setTasks(
        selectedProject === 'NEXT_7' ?
        newTasks.filter(
          task => moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
          task.isArchived !== true
        )
        : newTasks.filter(task => task.isArchived !== true)
      );
      // Fetching all the archived tasks
      setArchivedTasks(newTasks.filter(task => task.isArchived !== false));

      return () => unsubscribe();
    });
  }, [selectedProject]);

  return { tasks, archivedTasks }
}

export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('projects')
      .where('userId', '==', '1')
      .orderBy('projectId')
      .get() // Getting projects once because it won't be changing often
      .then(snapshot => {
        const allProjects = snapshot.docs.map(project => ({
          ...project.data(),
          docId: project.id, // Need the docId for deletion
        }))
        // This condition is here to prevent useEffect from
        // getting into an infinite loop
        if (JSON.stringify(allProjects) !== JSON.stringify(projects)){
          setProjects(allProjects);
        }
      })
  }, [projects]);

  return { projects, setProjects }
}