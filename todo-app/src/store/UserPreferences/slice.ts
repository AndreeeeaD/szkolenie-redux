import { createSlice } from '@reduxjs/toolkit';

type UserPreferencesState = { theme: 'light' | 'dark'}; 

const initialState: UserPreferencesState = {
  theme: 'light',
}

const userPreferencesSlice = createSlice({
  name: 'userPreferences',
  initialState: initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;

      return state;
    }
  }
});

export const {
  setTheme,
} = userPreferencesSlice.actions;

export default userPreferencesSlice.reducer;
