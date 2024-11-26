import { Action } from 'redux';

export const LOGIN_USER = 'LOGIN USER';
export const LOGOUT_USER = 'LOGOUT USER';
export const UPDATE_DELETED_TASKS = 'UPDATE DELETED TASKS';

export type LoginUserAction = Action<typeof LOGIN_USER>;
export type LogoutUserAction = Action<typeof LOGOUT_USER>;
export type UpdateDeletedTasksAction = Action<typeof UPDATE_DELETED_TASKS>;

export const loginUser = () => ({
  type: LOGIN_USER,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const updateDeletedTasks = () => ({
  type: UPDATE_DELETED_TASKS,
});
