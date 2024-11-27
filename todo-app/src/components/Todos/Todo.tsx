import { useDispatch } from 'react-redux';
import { removeTask } from '../../store/Todos/slice';

type TodoProps = {
  id: number;
  title: string;
  estimation: number;
  assignee: string;
}

export const Todo = (props: TodoProps) => {
  const dispatch = useDispatch();

  const handleRemoveTask = () => {
    dispatch(removeTask(props.id));
  }

  return (
    <li style={{ borderBottom: '1px solid blue' }}>
      <div>Zadanie: {props.title}</div>
      <div>Estymacja: {props.estimation}</div>
      <div>Przypisane do: {props.assignee}</div>

      <button onClick={handleRemoveTask}>Remove task</button>
    </li>
  )
}
