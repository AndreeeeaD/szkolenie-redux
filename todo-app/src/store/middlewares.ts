import logger from 'redux-logger';
import { Action, applyMiddleware, Middleware } from 'redux';
import { ADD_TASK, REMOVE_TASK } from './Todos/actions';
import { updateAddedTasks, updateDeletedTasks } from './User/actions';
import { AppAction } from './store';
import { Task } from '../components/Todos/TodoList';

const updateTasksMiddleware: Middleware = (store) => (next) => (action) => {
  const tempAction = action;
  if ((action as Action).type === REMOVE_TASK) {
    store.dispatch(updateDeletedTasks());
  }

  if ((action as Action).type === ADD_TASK) {
    type InternalAction = AppAction<typeof ADD_TASK, Task>;
    
    (tempAction as InternalAction).payload = {
      ...(tempAction as InternalAction).payload,
      estimation: Math.floor(Math.random() * 100),
    };
    
    store.dispatch(updateAddedTasks());
  }

  next(tempAction);
}

export const middlewares = applyMiddleware(logger, updateTasksMiddleware);
