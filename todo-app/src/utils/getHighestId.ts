import { Task } from '../components/Todos/TodoList';

export const getHighestId = (items: Task[]) => {
  return items.reduce((acc, item) => {
    return item.id > acc ? item.id : acc;
  }, 0) + 1;
}
export const getHighestIdWithMathMax = (items: Task[]) => {
  return Math.max(...items.map((item) => item.id)) + 1;
}
