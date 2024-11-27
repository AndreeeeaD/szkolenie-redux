import { FormEvent, useState } from 'react';
import { Input } from '../Input/Input';
import { useDispatch } from 'react-redux';
import { addTask } from '../../../store/Todos/slice';

type FormValues = {
  title: string;
  assignee: string;
  priority: number;
}

export const Form = () => {
  const [ values, setValues ] = useState<FormValues>({ title: '', assignee: '', priority: 0 });
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    })

    // setValues({
    //   title: e.target.id === 'title' ? e.target.value : values.title,
    //   assignee: e.target.id === 'assignee' ? e.target.value : values.assignee,
    // })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTask(values));
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input onChange={handleChange} value={values.title} id="title" label="Dodaj tytuł" />
      <Input onChange={handleChange} value={values.assignee} id="assignee" label="Przypisz do:" />
      <Input onChange={handleChange} value={values.priority} id="priority" label="Dodaj priorytet" />
      <button type="submit">Dodaj zadanie</button>
    </form>
  )
}
