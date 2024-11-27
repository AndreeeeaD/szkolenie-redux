import logger from 'redux-logger';
import { Action, Middleware } from 'redux';
import { addTask, removeTask } from './Todos/slice';
import { updateAddedTasks, updateDeletedTasks } from './User/slice';
import { AppAction } from './store';
import { Task } from '../components/Todos/TodoList';
import { getRandomEstimation } from '../utils/getRandomEstimation';

const updateTasksMiddleware: Middleware = (store) => (next) => (action) => {
  const tempAction = action;

  if ((action as Action).type === removeTask.type) {
    store.dispatch(updateDeletedTasks());
  }

  if ((action as Action).type === addTask.type) {
    type InternalAction = AppAction<typeof addTask.type, Task>;
    
    (tempAction as InternalAction).payload = {
      ...(tempAction as InternalAction).payload,
      estimation: getRandomEstimation(100),
    };
    
    store.dispatch(updateAddedTasks());
  }

  next(tempAction);
}

export const middlewares = [logger, updateTasksMiddleware]
