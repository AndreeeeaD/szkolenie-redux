import { Reducer } from 'redux';
import { FETCH_COMMENTS_FAILURE, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FetchCommentsFailureAction, FetchCommentsRequestAction, FetchCommentsSuccessAction } from './actions';
import { Comment } from '../../containers/Comments/Comments.container';

type CommentsState = {
  comments: Comment[];
  loading: boolean;
  error: string | null;
}

type Action = 
  | FetchCommentsRequestAction 
  | FetchCommentsSuccessAction 
  | FetchCommentsFailureAction;

const initialState: CommentsState = {
  comments: [], 
  loading: false,
  error: null,
}

const commentsReducer: Reducer<CommentsState, Action> = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_COMMENTS_REQUEST: 
      return {
        ...state,
        loading: true,
        error: null,
      }
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.payload,
      }
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default commentsReducer;
