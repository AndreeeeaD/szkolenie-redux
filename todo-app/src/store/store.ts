import { combineReducers, createStore } from 'redux';
import { todoReducer } from './Todos/reducer';
import { userReducer } from './User/reducer';

export type Action<T, R = {}> = {
  type: T;
  payload: R;
}

const rootReducer = combineReducers({
  tasks: todoReducer,
  user: userReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
