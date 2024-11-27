import { createSlice } from '@reduxjs/toolkit';
import { Task } from '../../components/Todos/TodoList';

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

const todoSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      
      return state;
    },
    removeTask  : (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    changeTask: (state, action) => {
      state.map(task => task.id === action.payload.idToChange ? { ...task, ...action.payload.task } : task) as Task[];
    
      return state;
    },
  },
  selectors: {
    getTasks: (state) => state,
  }
})

export const {
  addTask,
  removeTask,
  changeTask,
} = todoSlice.actions;

export const {
  getTasks,
} = todoSlice.getSelectors();



export default todoSlice.reducer;
