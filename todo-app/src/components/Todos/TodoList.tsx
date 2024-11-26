import { Todo } from './Todo'

export type Task = {
  id: number;
  title: string;
  estimation: number;
  assignee: string;
}

type TodoListProps = {
  todos: Task[];
}

export const TodoList = ({ todos }: TodoListProps) => {
  return <ul style={{ maxWidth: '20em'}}>
    {todos.map((item) => (
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
