import { Todo } from './Todo'

export type Task = {
  id: number;
  title: string;
  estimation: number;
  assignee: string;
}

type TodoListProps = {
  items: Task[];
}

export const TodoList = (props: TodoListProps) => {
  return <ul>
    {props.items.map((item) => (
      <Todo
        key={item.id}
        title={item.title}
        assignee={item.assignee}
        estimation={item.estimation}
      />
    ))}
  </ul>
}
