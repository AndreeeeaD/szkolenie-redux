import { ADD_TASK, REMOVE_TASK, CHANGE_TASK, Task, Action } from '../1/solution'

const initialState: Task[] = [];

export const todoReducer = (state = initialState, action: { type: string; payload: Partial<Task> | { idToChange: number; task: Partial<Task> } }) => {
  switch(action.type) {
    case ADD_TASK: 
      // state.push(action.payload);
      return [...state, action.payload];
    case REMOVE_TASK:
      return state.filter(task => task.id !== action.payload);
    case CHANGE_TASK:
      const payload = action.payload as { idToChange: number; task: Partial<Task> };
      return state.map(task => task.id === payload.idToChange ? { ...task, ...payload.task } : task);
    default:
      return state;
  }
}
