import { Comment } from '../../containers/Comments/Comments.container'

export const CommentsList = ({ comments }: { comments: Comment[] }) => {
  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
          <p>{comment.email}</p>
        </li>
      ))}
    </ul>
  )
}
