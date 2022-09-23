import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import MovieCard from "../components/MovieCard";
import Nav from "../components/Nav";

/**
 * Creating instane for shared config.
 * You can use this instance for different integration methods */
export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  //   headers: { Authorization: "6207b681b0d7a1d67cd9fcd8fd1b5848" },
});

const Movies = () => {
  const param = useParams();
  const [movieList, setMovielist] = useState([]);

  useEffect(() => {
    instance
      .get(
        "/search/movie?api_key=" +
          process.env.REACT_APP_MOVIEDB_AUITH_API +
          `&query={${param.query}}`
      )
      .then((result) => result.data) //return data
      .then((data) => {
        console.log(data.results);
        setMovielist([...data.results]);
      })
      .catch((error) => console.log(error));
  }, [param.query]);

  return (
    <>
      <section className="row row-cols-lg-3 g-4">
        {movieList.map((item) => {
          return <MovieCard item={item} />;
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
