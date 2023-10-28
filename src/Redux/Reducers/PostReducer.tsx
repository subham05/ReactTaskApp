import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  postList: [],

  loading: false,
  error: '',
  status: '',
  createPostRes: {},
};

const PostSlice = createSlice({
  name: 'Post',
  initialState,
  reducers: {
    allPostRequest: (state, action) => {
      state.loading = true;
      state.status = action.type;
    },
    allPostSuccess: (state, action) => {
      state.loading = false;
      state.postList = action.payload;
      state.status = action.type;
    },
    allPostFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.status = action.type;
    },
    createPostRequest: (state, action) => {
      state.loading = true;
      state.status = action.type;
    },
    createPostSuccess: (state, action) => {
      state.loading = false;
      state.createPostRes = action.payload;
      state.status = action.type;
    },
    createPostFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.status = action.type;
    },
  },
});

export const {
  allPostRequest,
  allPostSuccess,
  allPostFailure,
  createPostRequest,
  createPostSuccess,
  createPostFailure,
} = PostSlice.actions;
export default PostSlice.reducer;
