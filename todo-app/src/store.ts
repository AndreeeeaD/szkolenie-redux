import { createStore } from 'redux';
import { Task } from './TodoList';

export const ADD_TASK = 'ADD TASK';
export const REMOVE_TASK = 'REMOVE TASK';
export const CHANGE_TASK = 'CHANGE TASK';

export type Action<T, R = {}> = {
  type: T;
  payload: R;
}

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

const tasks: Task[] = [
  {
    id: 1,
    title: 'Task 1',
    estimation: 5,
    assignee: 'John Doe',
  },
  {
    id: 2,
    title: 'Task 2',
    estimation: 3,
    assignee: 'Jane Doe',
  },
];

const initialState = { tasks };

export const todoReducer = (state = initialState, action: { type: string; payload: Partial<Task> | { idToChange: number; task: Partial<Task> } }) => {
  switch(action.type) {
    case ADD_TASK: 
      // state.push(action.payload);
      return {
        tasks: [...state.tasks, action.payload as Task],
      };
    case REMOVE_TASK:
      return {
        tasks: state.tasks.filter(task => task.id !== action.payload as number),
      }
    case CHANGE_TASK:
      const payload = action.payload as { idToChange: number; task: Partial<Task> };
      return {
        tasks: state.tasks.map(task => task.id === payload.idToChange ? { ...task, ...payload.task } : task),
      }
    default:
      return state;
  }
}

export const store = createStore(todoReducer);

export type RootState = ReturnType<typeof store.getState>;
