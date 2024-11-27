import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Task, TodoList } from '../components/Todos/TodoList';
import { Form } from '../components/common/Form/Form';
import { getTasks } from '../store/Todos/slice';

export const TodosContainer = () => {
  const items = useSelector<RootState, Task[]>(state => state.tasks);
  const user = useSelector<RootState>(state => state.user);

  console.log(useSelector(state => getTasks(state as any)))

  return user ? (
    <>
      <TodoList todos={items} />
      <Form />
    </>
  ) : null
}
