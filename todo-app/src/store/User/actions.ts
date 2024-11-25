import { Action } from '../store';

export const LOGIN_USER = 'LOGIN USER';
export const LOGOUT_USER = 'LOGOUT USER';

export const loginUser = () => ({
  type: LOGIN_USER,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
