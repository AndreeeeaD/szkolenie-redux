import {  Action, combineReducers, compose, UnknownAction } from 'redux';
import { createStore} from 'redux'

import { todoReducer } from './Todos/reducer';
import { userReducer } from './User/reducer';
import { userPreferencesReducer } from './UserPreferences/reducer'

import { sayHiOnDispatchEnhancer } from './enhacers';
import { middlewares } from './middlewares';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import commentsReducer from './Comments/reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

export type AppAction<T, R = {}> = {
  type: T;
  payload: R;
};

const rootReducer = combineReducers({
  tasks: todoReducer,
  user: userReducer,
  userPreferences: userPreferencesReducer,
  comments: commentsReducer,
});

const enhancers = compose(
  sayHiOnDispatchEnhancer,
  middlewares,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// @ts-ignore
export const store = createStore(
  rootReducer,
  enhancers,
);

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;
