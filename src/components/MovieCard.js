import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { favActions } from "../store/slices/fav-slice";

const Card = styled.div`
  @media (min-width: 768px) {
    max-width: 20rem;
  }
`;

const MovieCard = ({ item }) => {
  const dispatch = useDispatch();
  const favouriteMovies = useSelector((state) => state.favlist.items);
  const toggleFavourite = () => {
    dispatch(
      favActions.toggle({
        id: item.id,
        title: item.title,
        poster_path: item.poster_path,
        overview: item.overview,
        price: item.price,
        date: item.date,
      })
    );
  };

  return (
    <div className="col" key={item.id}>
      <Card className="card position-relative rounded-3 overflow-hidden mx-auto">
        <button
          className="fav-heart"
          onClick={toggleFavourite.bind(this, item.id)}
        >
          <i
            className={`${
              favouriteMovies.find((movieItem) => item.id === movieItem.id)
                ? "fas"
                : "far"
            } fa-heart fs-5 text-danger`}
          ></i>
        </button>

        <img
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          className="card-img-top"
          alt={item.title}
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
      </Card>
    </div>
  );
};

export default MovieCard;
