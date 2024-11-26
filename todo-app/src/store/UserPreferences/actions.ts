export const SET_THEME = 'SET THEME';

export type SetThemeAction = {
  type: typeof SET_THEME;
  payload: 'dark' | 'light';
};

export const setTheme = (theme: 'dark' | 'light'): SetThemeAction => ({
  type: SET_THEME,
  payload: theme,
});
