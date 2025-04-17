import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import postsSlice from "./slices/postsSlice";
// import { counterSlice } from "./slices/counterSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      counterData: counterReducer /*counterSlice.reducer*/,
      postsReducer: postsSlice.reducer,
    },
  });
};
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
