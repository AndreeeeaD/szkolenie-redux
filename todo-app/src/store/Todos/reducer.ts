import { Task } from '../../components/Todos/TodoList';
import { ADD_TASK, CHANGE_TASK, REMOVE_TASK } from './actions';

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

const initialState: Task[] = tasks;

export const todoReducer = (state = initialState, action: { type: string; payload: Partial<Task> | { idToChange: number; task: Partial<Task> } }) => {
  switch(action.type) {
    case ADD_TASK: 
      return [...state, action.payload as Task]
    case REMOVE_TASK:
      return state.filter(task => task.id !== action.payload as number)
    case CHANGE_TASK:
      const payload = action.payload as { idToChange: number; task: Partial<Task> };
      return state.map(task => task.id === payload.idToChange ? { ...task, ...payload.task } : task)
    default:
      return state;
  }
}
