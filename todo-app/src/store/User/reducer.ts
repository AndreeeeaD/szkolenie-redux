import { LOGIN_USER, LOGOUT_USER } from './actions';

export const userReducer = (state = null, action: any) => {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        id: 1,
        name: 'John Doe',
      };
    }
    case LOGOUT_USER: {
      return null;
    }
    default: {
      return state;
    }
  }
}
