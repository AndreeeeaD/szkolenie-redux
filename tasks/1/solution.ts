const ADD_TASK = 'ADD TASK';
const REMOVE_TASK = 'REMOVE TASK';
const CHANGE_TASK = 'CHANGE TASK';

type Task = {
  id: number;
  title: string;
  estimation: number;
  assignee: string;
}

type Action<T, R = {}> = {
  type: T;
  payload: R;
}

const addTask = (task: Partial<Task>): Action<typeof ADD_TASK, Partial<Task>> => ({
  type: ADD_TASK,
  payload: task,
});

const removeTask = (id: number): Action<typeof REMOVE_TASK, number> => ({
  type: REMOVE_TASK,
  payload: id,
});

const changeTask = (id, task: Omit<Partial<Task>, 'id'>): Action<
  typeof CHANGE_TASK, {
  idToChange: number;
  task: Omit<Partial<Task>, 'id'>;
}> => ({
  type: CHANGE_TASK,
  payload: {
    idToChange: id,
    task,
  },
});
