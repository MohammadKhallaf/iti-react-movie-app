import axios from "axios";
import { AUTH_API } from "../credentials";
import { movActions } from "./slices/movies-slice";
/**
 * Creating instane for shared config.
 * You can use this instance for different integration methods */
export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const getMovieList = (page) => {
  return async (dispatch) => {
    axiosInstance
      .get("/movie/popular?api_key=" + AUTH_API + `&page=${page}`)
      .then((res) => {
        dispatch(
          movActions.getMovies({
            page: res.data.page,
            results: [...res.data.results],
          })
        );
      })

      .catch((error) => console.log(error));
  };
};

export const getSingleMovie = (id) => {
  return async (dispatch) => {
    axiosInstance
    .get(`/movie/${id}?api_key=${AUTH_API}`)
    .then((res) => {
      console.log(res)
        if (!res) {
          throw new Error("trying to reach not found resource");
        }
        dispatch(
          movActions.getMovies({
            page: 0,
            results: [res.data],
          })
        );
      })

      .catch((error) => console.log(error, "E"));
      
  };
};
