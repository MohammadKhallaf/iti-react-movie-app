import Navbar from "./components/Navbar";
import Movies from "./pages/Movies";
import MoviePage from "./pages/MoviePage";
import MovieSearch from "./pages/MovieSearch";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FavouriteList from "./pages/FavouriteList";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <main className="container pt-5">
        {/* DON'T wrap switch to the whole DOM => to not get an error */}
        {/* Switch should wrap Route..s only */}
        <Switch>
          <Route path={"/"} exact component={Movies} />
          <Route path={"/page/:page"} exact component={Movies} />
          <Route path={"/query/:query"} exact component={MovieSearch} />
          <Route path={"/movie/:id"} exact component={MoviePage} />
          <Route path={"/favList"} exact component={FavouriteList} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
