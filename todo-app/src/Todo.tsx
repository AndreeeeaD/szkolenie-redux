import { useDispatch } from 'react-redux';
import { removeTask } from './store';

type TodoProps = {
  id: number;
  title: string;
  estimation: number;
  assignee: string;
}

// export const Todo = ({ title,estimation, assignee }: TodoProps) => {
//   return (
//     <li>
//       <span>{title}</span>
//       <span>{estimation}</span>
//       <span>{props.assignee}</span>
//     </li>
//   )
// }

export const Todo = (props: TodoProps) => {
  const dispatch = useDispatch();

  const handleRemoveTask = () => {
    dispatch(removeTask(props.id));
  }

  return (
    <li>
      <span>{props.title}</span>
      <span>{props.estimation}</span>
      <span>{props.assignee}</span>

      <button onClick={handleRemoveTask}>Remove task</button>
    </li>
  )
}
