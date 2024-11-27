import {  Action, UnknownAction } from 'redux';

import todoReducer from './Todos/slice';
import userReducer from './User/slice';

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

const rootReducer = {
  tasks: todoReducer,
  userPreferences: userPreferencesReducer,
  // comments: commentsReducer,
  user: userReducer
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
  enhancers: (getDefaultEnhancer) => getDefaultEnhancer().concat(enhancers),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;
