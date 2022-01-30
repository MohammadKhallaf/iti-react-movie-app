import { createSlice } from "@reduxjs/toolkit";

const INITIAL_MOVIE_STATE = {
  page: 0,
  results: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: INITIAL_MOVIE_STATE,
  reducers: {
    getMovies(state, action) {
      state.page = action.payload.page;
      state.results = action.payload.results;
    },
  },
});

export const movActions = moviesSlice.actions;
export const movReducer = moviesSlice.reducer;
