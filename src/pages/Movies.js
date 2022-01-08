import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import Nav from "../components/Nav";

export const AUTH_API = "6207b681b0d7a1d67cd9fcd8fd1b5848";
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
      .get("/movie/popular?api_key=" + AUTH_API + `&page=${param.page}`)
      .then((result) => result.data) //return data
      .then((data) => {
        setMovielist([...data.results]);
      })
      .catch((error) => console.log(error));
  }, [param.page]);

  return (
    <>
      <section className="row row-cols-lg-3 g-4">
        {movieList.map((item) => {
          return <MovieCard item={item} key={item.id}/>;
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
