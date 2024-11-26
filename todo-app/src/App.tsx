import './App.css';
import { Hello }  from './Hello';
import { TodosContainer } from './containers/Todos.container';
import { UserProfile } from './components/User/UserProfile';
import { UserPreferencesContainer } from './containers/UserPreferences/connect';

function App() {
  return (
    <div>
      <Hello message='Test' hLevel='h2' />
      <UserProfile />
      <TodosContainer />
      <footer>
        <UserPreferencesContainer />
      </footer>
    </div>
  );
}

export default App;