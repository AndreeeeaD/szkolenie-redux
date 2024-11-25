import { ADD_TASK, REMOVE_TASK, CHANGE_TASK, Task } from '../1/solution'

const initialState: Task[] = [];

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TASK: 
      // state.push(action.payload);
      return [...state, action.payload];
    case REMOVE_TASK:
      return state.filter(task => task.id !== action.payload);
    case CHANGE_TASK:
      return state.map(task => task.id === action.payload.idToChange ? { ...task, ...action.payload.task } : task);
    default:
      return state;
  }
}
