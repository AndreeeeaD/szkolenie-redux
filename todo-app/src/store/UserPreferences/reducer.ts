import { Action, Reducer } from 'redux';
import { SET_THEME } from './actions';

type UserPreferencesState = { theme: 'light' | 'dark'}; 

const initialState: UserPreferencesState = {
  theme: 'light',
}

export const userPreferencesReducer: Reducer<UserPreferencesState, Action> = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
}
