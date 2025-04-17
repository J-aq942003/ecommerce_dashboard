import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "../actions/postsActions";
///

const initialState = {
  posts: [],
  isLoading: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getAllPosts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllPosts.fulfilled, (state, action: any) => {
      // Add posts to the state array
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(getAllPosts.rejected, (state, action) => {
      // Add user to the state array
      // state.entities.push(action.payload);
    });
  },
});

export default postsSlice;
