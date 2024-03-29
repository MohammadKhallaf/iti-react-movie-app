import axios from "axios";
import { movActions } from "./slices/movies-slice";
/**
 * Creating instane for shared config.
 * You can use this instance for different integration methods
 * */

/**
 * MOVIE API
 */
export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const getMovieList = (page, lang) => {
  return async (dispatch) => {
    axiosInstance
      .get(
        "/movie/popular?api_key=" +
          process.env.REACT_APP_MOVIEDB_AUITH_API +
          `&page=${page}&language=${lang}`
      )
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
      .get(`/movie/${id}?api_key=${  process.env.REACT_APP_MOVIEDB_AUITH_API}`)
      .then((res) => {
        console.log(res);
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
