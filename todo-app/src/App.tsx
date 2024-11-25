import React from 'react';
import './App.css';
import { Hello }  from './Hello';
import { Task, TodoList } from './TodoList';

const tasks: Task[] = [
  {
    id: 1,
    title: 'Task 1',
    estimation: 5,
    assignee: 'John Doe',
  },
  {
    id: 2,
    title: 'Task 2',
    estimation: 3,
    assignee: 'Jane Doe',
  },
];


function App() {
  return (
    <div>
      <Hello message='Test' hLevel='h2' />
      <TodoList items={tasks} />
    </div>
  );
}

export default App;
