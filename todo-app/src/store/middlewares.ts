import logger from 'redux-logger';
import { Action, applyMiddleware, Middleware } from 'redux';
import { REMOVE_TASK } from './Todos/actions';
import { updateDeletedTasks } from './User/actions';

const updateTasksMiddleware: Middleware = (store) => (next) => (action) => {
  if ((action as Action).type === REMOVE_TASK) {
    store.dispatch(updateDeletedTasks());
    next(action);
  }

  next(action);
}

export const middlewares = applyMiddleware(logger, updateTasksMiddleware);
