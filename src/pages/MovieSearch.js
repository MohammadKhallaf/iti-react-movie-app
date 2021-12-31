import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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
  const [page, setPage] = useState(1);
  const param = useParams();
  const [movieList, setMovielist] = useState([]);
 
  useEffect(() => {
    instance
      .get("/search/movie?api_key=" + AUTH_API + `&query={${param.query}}`)
      .then((result) => result.data) //return data
      .then((data) => {
          console.log(data.results)
        setMovielist([...data.results]);
      })
      .catch((error) => console.log(error));
  }, [param.query]);

  return (
    <>
      <section className="row row-cols-lg-3 g-4">
        {movieList.map((item) => {
          return (
            <div className="col" key={item.id}>
              <div className="card" style={{ width: "20rem" }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title text-truncate">{item.title}</h5>
                  <p className="card-text text-truncate">{item.overview}</p>
                  <Link to={`/movie/${item.id}`} key={item.id}>
                    <span className="btn btn-primary">View Details</span>
                  </Link>
                </div>
                <div className="card-footer">
                  <small className="text-muted">{item.vote_count}</small>
                </div>
              </div>
            </div>
          );
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
