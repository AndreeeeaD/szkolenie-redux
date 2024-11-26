import {  combineReducers, compose } from 'redux';
import { createStore} from 'redux'

import { todoReducer } from './Todos/reducer';
import { userReducer } from './User/reducer';
import { userPreferencesReducer } from './UserPreferences/reducer'

import { sayHiOnDispatchEnhancer } from './enhacers';
import { middlewares } from './middlewares';

export type AppAction<T, R = {}> = {
  type: T;
  payload: R;
};

const rootReducer = combineReducers({
  tasks: todoReducer,
  user: userReducer,
  userPreferences: userPreferencesReducer,
});

const enhancers = compose(sayHiOnDispatchEnhancer, middlewares);

// @ts-ignore
export const store = createStore(
  rootReducer,
  enhancers,
);

export type RootState = ReturnType<typeof rootReducer>;
