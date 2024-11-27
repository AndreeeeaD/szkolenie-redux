import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

type CommentsState = {
  loading: boolean;
  comments: Comment[];
  error: string | null;
}

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    return data;
  }
);

const initialState: CommentsState = {
  loading: false,
  comments: [],
  error: null,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.loading = false;
      state.comments = action.payload;
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error as string;
    });
  },
});

export default commentsSlice.reducer;
