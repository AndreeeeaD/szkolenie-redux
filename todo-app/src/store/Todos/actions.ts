import { Task } from '../../components/Todos/TodoList';
import { Action } from '../store';

export const ADD_TASK = 'ADD TASK';
export const REMOVE_TASK = 'REMOVE TASK';
export const CHANGE_TASK = 'CHANGE TASK';

export const addTask = (task: Partial<Task>): Action<typeof ADD_TASK, Partial<Task>> => ({
  type: ADD_TASK,
  payload: task,
});

export const removeTask = (id: number): Action<typeof REMOVE_TASK, number> => ({
  type: REMOVE_TASK,
  payload: id,
});

export const changeTask = (id: number, task: Omit<Partial<Task>, 'id'>): Action<
  typeof CHANGE_TASK, {
  idToChange: number;
  task: Omit<Partial<Task>, 'id'>;
}> => ({
  type: CHANGE_TASK,
  payload: {
    idToChange: id,
    task,
  },
});
