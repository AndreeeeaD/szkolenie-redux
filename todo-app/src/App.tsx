import React from 'react';
import './App.css';
import { Hello }  from './Hello';
import { TodosContainer } from './containers/Todos.container';
import { UserProfile } from './components/User/UserProfile';

function App() {
  return (
    <div>
      <Hello message='Test' hLevel='h2' />
      <UserProfile />
      <TodosContainer />
    </div>
  );
}

export default App;
