import { Reducer } from 'redux';
import { Task } from '../../components/Todos/TodoList';
import { ADD_TASK, AddTaskAction, CHANGE_TASK, ChangeTaskAction, REMOVE_TASK, RemoveTaskAction } from './actions';
import { getHighestId } from '../../utils/getHighestId';

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

type Action = AddTaskAction | RemoveTaskAction | ChangeTaskAction;

export const todoReducer: Reducer<Task[], Action> = (state = initialState, action: Action) => {
  switch(action.type) {
    case ADD_TASK: 
      return [...state, { ...action.payload, id: getHighestId(state)} as Task] as Task[];
    case REMOVE_TASK:
      return state.filter(task => task.id !== action.payload as number) as Task[];
    case CHANGE_TASK:
      const payload = action.payload as { idToChange: number; task: Partial<Task> };
      return state.map(task => task.id === payload.idToChange ? { ...task, ...payload.task } : task) as Task[];
    default:
      return state;
  }
}
