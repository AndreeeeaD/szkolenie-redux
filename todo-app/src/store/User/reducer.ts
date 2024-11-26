import { Reducer } from 'redux';
import {
  LOGIN_USER,
  LoginUserAction,
  LOGOUT_USER,
  LogoutUserAction,
  UPDATE_ADDED_TASKS,
  UPDATE_DELETED_TASKS,
  UpdateAddedTasksAction,
  UpdateDeletedTasksAction,
} from './actions';

type Action = LoginUserAction | LogoutUserAction | UpdateDeletedTasksAction | UpdateAddedTasksAction;

type UserState = { 
  id: number,
  name: string,
  tasks: {
    deleted: number,
    done: number,
    added: number,
  },
} | null;

export const userReducer: Reducer<UserState, Action> = (state = null, action: Action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        id: 1,
        name: 'John Doe',
        tasks: {
          deleted: 0,
          done: 0,
          added: 0,
        }
      };
    }
    case LOGOUT_USER: {
      return null;
    }
    case UPDATE_ADDED_TASKS: {
      return state ? {
        ...state,
        tasks: {
          ...state.tasks,
          added: state.tasks.added + 1,
        }
      } : null;
    }
    case UPDATE_DELETED_TASKS: {
      return state ? {
        ...state,
        tasks: {
          ...state.tasks,
          deleted: state.tasks.deleted + 1,
        }
      } : null;
    }
    default: {
      return state;
    }
  }
};
