import { useSelector } from 'react-redux';
import { CommentsList } from '../../components/Comments/ CommentsList';
import { RootState } from '../../store/store';
import { useEffect } from 'react';
import { fetchComments } from '../../store/Comments/actions';
import { useAppDispatch } from '../../store/hooks';

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const CommentsContainer = () => {
  // const { loading, error, comments } = useSelector((state: RootState) => state.comments);
  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(fetchComments())
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>
  // }

  // if (error) {
  //   return <div>Error: {error}</div>
  // }

  return <CommentsList comments={[]} />
}
