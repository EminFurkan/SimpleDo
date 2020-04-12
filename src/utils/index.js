import { filteredTasks } from '../constants';

export const filteredTasksExist = selectedProject => {
  filteredTasks.find(task => task.key === selectedProject);
}