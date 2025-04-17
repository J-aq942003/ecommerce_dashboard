import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
///

export const getAllPosts = createAsyncThunk("posts/getAll", async () => {
  //For testing i delay the response for 5 seconds.
  const postsData = new Promise((resolve, reject) => {
    setTimeout(async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      resolve(response.data);
    }, 5000);
  });
  return postsData;
});
export const createPost = createAsyncThunk(
  "posts/createPost",
  async ({ url, postId }: { url: string; postId: string }, thunkAPI) => {
    //For testing i delay the response for 5 seconds.
    const postsData = new Promise((resolve, reject) => {
      setTimeout(async () => {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        resolve(response.data);
      }, 5000);
    });
    return postsData;
  }
);

