import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Error } from "../components/Error";
import { getSingleMovie } from "../store/actions";

const MoviePage = () => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movlist.results[0]);
  const param = useParams();
  useEffect(() => {
    dispatch(getSingleMovie(param.id));
    

  }, [movie]);

  return (
    (movie && (
      <div className="container bg-light rounded p-5">
   
        <div className="row">
          <div className="col-6">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              className="blur"
              alt="film poster"
            />
          </div>
          <article className="col-6">
            <h1>{movie.title}</h1>
            <time>{movie.release_date}</time>
            <p>${parseInt(movie.budget) / 1000000.0}M</p>
            <p>{movie.overview}</p>
          </article>
        </div>
      </div>
    )) ||<Error />
  );
};

export default MoviePage;
