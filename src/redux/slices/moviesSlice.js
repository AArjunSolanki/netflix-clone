import { createSlice } from "@reduxjs/toolkit";
import {
  getMovieDetailsById,
  getPopularMovieByName,
  getPopularMovieList,
} from "../actions/moviesAction";

const MoviesSlice = createSlice({
  name: "movies",
  initialState: {
    loading: false,
    popularMovieList: [],
    totalPopularMoviesPages: 0,
    popularMoviePageNo: 1,
    movieDetails: null,
    movieCreditDetails: null,
  },
  reducers: {
    setPopularMoviePageNo: (state, action) => {
      state.popularMoviePageNo = action.payload;
    },
    setTotalPopularMoviesPages: (state, action) => {
      state.totalPopularMoviesPages = action.payload;
    },
  },
  extraReducers: (builder) => {
    // get popular movie list
    builder.addCase(getPopularMovieList.pending, (state, { payload }) => {
      state.loading = true;
    });

    builder.addCase(getPopularMovieList.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.popularMovieList = payload?.Search;
    });

    builder.addCase(getPopularMovieList.rejected, (state, { payload }) => {
      state.loading = false;
    });

    // get movie by name api
    builder.addCase(getPopularMovieByName.pending, (state, { payload }) => {
      state.loading = true;
    });

    builder.addCase(getPopularMovieByName.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.popularMovieList = payload?.Search;
    });

    builder.addCase(getPopularMovieByName.rejected, (state, { payload }) => {
      state.loading = false;
    });

    // get movie details by id
    builder.addCase(getMovieDetailsById.pending, (state, { payload }) => {
      state.loading = true;
      state.movieDetails = null;
    });

    builder.addCase(getMovieDetailsById.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.movieDetails = payload;
    });

    builder.addCase(getMovieDetailsById.rejected, (state, { payload }) => {
      state.loading = false;
      state.movieDetails = null;
    });
  },
});

export const { setPopularMoviePageNo, setTotalPopularMoviesPages } =
  MoviesSlice.actions;

export default MoviesSlice.reducer;
