import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slices/moviesSlice";

const combinedReducer = {
  movies: moviesSlice,
};

export default configureStore({
  reducer: combinedReducer,
});
