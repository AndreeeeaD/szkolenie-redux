import { createSlice } from '@reduxjs/toolkit';

type UserState = { 
  id?: number,
  name?: string,
  tasks?: {
    deleted: number,
    done: number,
    added: number,
  },
};

const initialState: UserState = {};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    loginUser: (state: UserState) => {
      state = {
        id: 1,
        name: 'John Doe',
        tasks: {
          deleted: 0,
          done: 0,
          added: 0,
        }
      };

      return state;
    },
    logoutUser: (state) => {
      state = {};
      return state;
    },
    updateDeletedTasks: (state: UserState) => {
      if (state && state.tasks) {
        state.tasks.deleted += 1;
      }
    },
    updateAddedTasks: (state: UserState) => {
      if (state && state.tasks) {
        state.tasks.added += 1;
      }
    },
  },
});

export const {
  loginUser,
  logoutUser,
  updateAddedTasks,
  updateDeletedTasks,
} = userSlice.actions;

export default userSlice.reducer;
