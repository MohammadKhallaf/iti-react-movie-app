import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { favActions } from "../store/slices/fav-slice";
const MovieCard = (props) => {
  const item = props.item;
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
    <div className="col" key={props.item.id}>
      <div
        className="card position-relative rounded-3 overflow-hidden"
        style={{ width: "20rem" }}
      >
        <button
          className="fav-heart"
          onClick={toggleFavourite.bind(this, props.item.id)}
        >
          <i
            className={`${
              favouriteMovies.find((item) => item.id === props.item.id)
                ? "fas"
                : "far"
            } fa-heart fs-5 text-danger`}
          ></i>
        </button>
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.item.poster_path}`}
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title text-truncate">{props.item.title}</h5>
          <p className="card-text text-truncate">{props.item.overview}</p>
          <Link to={`/movie/${props.item.id}`} key={props.item.id}>
            <span className="btn btn-primary">View Details</span>
          </Link>
        </div>
        <div className="card-footer">
          <small className="text-muted">{props.item.vote_count}</small>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
