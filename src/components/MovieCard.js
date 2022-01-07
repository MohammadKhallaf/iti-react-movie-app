import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const dispatch = useDispatch();
  const favMovies = useSelector((state) => state.favs);
  const INITIAL_FAV_MOVIE = favMovies.includes(props.item.id);
  console.log(props.item.id, INITIAL_FAV_MOVIE);
  const [favourite, setFavourite] = useState(INITIAL_FAV_MOVIE);
  //   console.log(favourite)
  const toggleFavourite = (MovieID) => { 
    setFavourite((prevState) => !prevState);

    console.log(favourite, "Changed", props.item.id);
    if (favourite) {
      dispatch({ type: "add-favourite", movieID: props.item.id });
    } else {
      dispatch({ type: "remove-favourite", movieID: props.item.id });
    }
  };

  return (
    <div className="col" key={props.item.id}>
      <div className="card position-relative" style={{ width: "20rem" }}>
        <button
          className="fav-heart"
          onClick={toggleFavourite.bind(this, props.item.id)}
        >
          <i
            className={`${favourite ? "fas" : "far"} fa-heart fs-5 text-danger`}
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
