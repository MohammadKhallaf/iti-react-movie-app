import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance, AUTH_API } from "./Movies";
const MoviePage = () => {
  const [movie, setMovie] = useState({});
  const param = useParams();
  useEffect(() => {
    instance
      .get(`/movie/${param.id}?api_key=${AUTH_API}`)
      .then((result) => result.data)
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => console.log(error));
  });

  return (
    <div className="container bg-light rounded p-5">
      <div className="row">
        <div classname="col-6">
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
  );
};

export default MoviePage;
