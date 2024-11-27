import { Comment } from '../../containers/Comments/Comments.container';
import { AppThunk } from '../store';

export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

export type FetchCommentsRequestAction = {
  type: typeof FETCH_COMMENTS_REQUEST;  
}

export type FetchCommentsSuccessAction = {
  type: typeof FETCH_COMMENTS_SUCCESS;
  payload: Comment[];
}

export type FetchCommentsFailureAction = {
  type: typeof FETCH_COMMENTS_FAILURE;
  payload: string;
}

export const fetchCommentsRequest = (): FetchCommentsRequestAction => ({
  type: FETCH_COMMENTS_REQUEST,
});

export const fetchCommentsSuccess = (comments: Comment[]): FetchCommentsSuccessAction => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: comments,
});

export const fetchCommentsFailure = (error: string): FetchCommentsFailureAction => ({
  type: FETCH_COMMENTS_FAILURE,
  payload: error,
});

export const fetchComments = (): AppThunk => {
  return async (dispatch) => {
    dispatch(fetchCommentsRequest());
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      const data = await response.json();

      dispatch(fetchCommentsSuccess(data));
    } catch (error: unknown) {
      dispatch(fetchCommentsFailure(error as string));
    }
  }
}
