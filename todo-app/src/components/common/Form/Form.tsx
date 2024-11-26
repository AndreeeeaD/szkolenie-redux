import { useState } from 'react';
import { Input } from '../Input/Input';

type FormProps = {
  onSubmit: () => void;
}

type FormValues = {
  title: string;
  assignee: string;
  priority: number;
}

export const Form = ({ onSubmit }: FormProps) => {
  const [ values, setValues ] = useState<FormValues>({ title: '', assignee: '', priority: 0 });
  useState();

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

  return (
    <form onSubmit={onSubmit}>
      <Input onChange={handleChange} value={values.title} id="title" label="Dodaj zadanie" />
      <Input onChange={handleChange} value={values.assignee} id="assignee" label="Dodaj zadanie" />
      <Input onChange={handleChange} value={values.priority} id="priority" label="Dodaj zadanie" />
      <button type="button">Dodaj zadanie</button>
    </form>
  )
}
