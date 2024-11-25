type TodoProps = {
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
  return (
    <li>
      <span>{props.title}</span>
      <span>{props.estimation}</span>
      <span>{props.assignee}</span>
    </li>
  )
}
