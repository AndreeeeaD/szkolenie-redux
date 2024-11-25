import { useSelector } from 'react-redux';
import { Todo } from './Todo'
import { RootState } from './store';

export type Task = {
  id: number;
  title: string;
  estimation: number;
  assignee: string;
}

export const TodoList = () => {
  const items = useSelector<RootState, Task[]>(state => state.tasks);

  return <ul>
    {items.map((item) => (
      <Todo
        key={item.id}
        id={item.id}
        title={item.title}
        assignee={item.assignee}
        estimation={item.estimation}
      />
    ))}
  </ul>
}
