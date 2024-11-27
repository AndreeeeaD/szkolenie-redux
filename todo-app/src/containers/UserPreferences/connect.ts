import { connect } from 'react-redux';
import { UserPreferencesContainer as View } from './UserPreferences.container';
import { RootState } from '../../store/store';
import { setTheme } from '../../store/UserPreferences/slice';

const mapStateToProps = (state: RootState): {
  theme: 'dark' | 'light';
} => {
  return {
    theme: state.userPreferences.theme,
  };
}

const mapDispatchToProps = {
  setTheme,
};

export const UserPreferencesContainer =  connect(mapStateToProps, mapDispatchToProps)(View);

