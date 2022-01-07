// Here you should set the behaviour i/p => [R] => o/p

const INITIAL_FAV_STATE = { counter: 0, favs: [0] };
const MovieReducer = (state = INITIAL_FAV_STATE, action) => {
  console.log(action);
  switch (action.type) {
    //
    case "add-favourite":
      if (state.favs.includes(action.movieID)) {
      } else {
        return {
          counter: state.counter + 1,
          favs: [...state.favs, action.movieID],
        };
      }
      break;
    case "remove-favourite":
      if (state.favs.includes(action.movieID)) {
        const arr = state.favs.filter((item) => item !== action.movieID);
        return {
          counter: state.counter - 1,
          favs: arr,
        };
      } else {
      }
      break;
    default:
      return state;
  }
};

export default MovieReducer;
