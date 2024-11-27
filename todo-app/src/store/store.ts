import {  Action, combineReducers, UnknownAction } from 'redux';

import { todoReducer } from './Todos/reducer';
import { userReducer } from './User/reducer';

import { middlewares } from './middlewares';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import commentsReducer from './Comments/reducer';
import { configureStore } from '@reduxjs/toolkit';
import { enhancers } from './enhacers';
import userPreferencesReducer from './UserPreferences/slice';

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

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
  enhancers: (getDefaultEnhancer) => getDefaultEnhancer().concat(enhancers),
  devTools: true,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;
