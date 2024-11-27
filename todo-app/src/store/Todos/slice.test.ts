import { UnknownAction } from 'redux';
import todosReducer, { addTask, removeTask, changeTask, tasks } from './slice'

describe('Todos Slice', () => {
  describe('reducer', () => {

    it('should return the initial state', () => {
      expect(todosReducer(undefined, {} as UnknownAction)).toEqual(tasks);
    });

    it('should handle addTask', () => {
      const task = { id: 1, title: 'Task 1', estimation: 5, assignee: 'John Doe' };

      expect(
        todosReducer([], addTask(task))
      ).toEqual([task]);
    });

    it('should handle removeTask', () => {
      const task = { id: 1, title: 'Task 1', estimation: 5, assignee: 'John Doe' };
      const task2 = { id: 2, title: 'Task 2', estimation: 50, assignee: 'John Doe' };

      expect(
        todosReducer([task, task2], removeTask(1))
      ).toEqual([task2]);
    });
  })

  describe('actions', () => {
    it('should create an action to add a task', () => {
      const taskData = { id: 1, title: 'Task 1', estimation: 5, assignee: 'John Doe' };
      expect(addTask(taskData))
      .toEqual({
        type: "todos/addTask",
        payload: taskData,
      });
    });

    it('should create an action to remove a task', () => {
      expect(removeTask(1))
      .toEqual({
        type: "todos/removeTask",
        payload: 1,
      });
    });

    it('should create an action to change a task', () => {
      const taskData = { idToChange: 1, task: { title: 'Task 1', estimation: 5, assignee: 'John Doe' } };
      expect(changeTask(taskData))
      .toEqual({
        type: "todos/changeTask",
        payload: taskData,
      });
    });
  });
})
