import React from 'react';
import './App.css';
import { Hello }  from './Hello';
import { TodoList } from './TodoList';

function App() {
  return (
    <div>
      <Hello message='Test' hLevel='h2' />
      <TodoList />
    </div>
  );
}

export default App;
