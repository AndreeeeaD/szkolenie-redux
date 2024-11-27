import { connect } from 'react-redux';
import { UserPreferencesContainer as View } from './UserPreferences.container';
import { RootState } from '../../store/store';
import { setTheme, UserPreferencesState } from '../../store/UserPreferences/slice';

const mapStateToProps = (state: RootState): UserPreferencesState => {
  return {
    theme: state.userPreferences.theme,
  };
}

const mapDispatchToProps = {
  setTheme,
};

export const UserPreferencesContainer =  connect(mapStateToProps, mapDispatchToProps)(View);

