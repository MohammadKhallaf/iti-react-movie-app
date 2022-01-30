import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const FavouriteList = () => {
  const movieList = useSelector((state) => state.favlist.items);
  const movieCount = useSelector((state) => state.favlist.quantity);
  return (
    <>
      {(movieCount && (
        <section className="row row-cols-lg-3 g-4">
          {movieList.map((item) => {
            return <MovieCard item={item} key={item.id} />;
          })}
        </section>
      )) || (
        <div className="container">
          <h1>There is no movies in your favourite list</h1>
          <NavLink exact className="btn btn-outline-success" to={"/"}>
            Add some now
          </NavLink>
        </div>
      )}
    </>
  );
};
export default FavouriteList;
