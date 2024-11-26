import { ChangeEvent, FunctionComponent, InputHTMLAttributes } from 'react'

type InputProps = {
  value: string | number;
  label: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: FunctionComponent<InputProps> = ({ id, value, onChange, label, ...rest  }) => {
  return (
    <label>
      {label}
      <input id={id} onChange={onChange} value={value} {...rest} />
    </label>
  )
}
