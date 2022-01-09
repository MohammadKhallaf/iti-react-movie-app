import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import Nav from "../components/Nav";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList } from "../store/actions";
/**
 * Creating instane for shared config.
 * You can use this instance for different integration methods */
export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  //   headers: { Authorization: "6207b681b0d7a1d67cd9fcd8fd1b5848" },
});

const Movies = () => {
  const dipatch = useDispatch();
  const param = useParams();
  const movieList = useSelector((state) => state.movlist.results);
  useEffect(() => {
    dipatch(getMovieList(param.page));
  }, [param.page]);

  return (
    <>
      <section className="row row-cols-lg-3 g-4">
        {movieList.map((item) => {
          return <MovieCard item={item} key={item.id} />;
        })}
      </section>

      <footer className="footer mt-5 p-0">
        <div className=" d-flex justify-content-center">
          <Nav />
        </div>
      </footer>
    </>
  );
};

export default Movies;
