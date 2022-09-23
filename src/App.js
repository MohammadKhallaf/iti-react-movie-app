import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import UserContext from "./store/user-context";

import Movies from "./pages/Movies";
import MoviePage from "./pages/MoviePage";
import MovieSearch from "./pages/MovieSearch";
import FavouriteList from "./pages/FavouriteList";

import Navbar from "./components/Navbar";
import LoginForm from "./components/Form/LoginForm";
import RegisterForm from "./components/Form/RegisterForm";

/**
 * TODO: add **useState** to change the values of the isLoggedIn and theme and lang
 */
function App() {
  const userCtx = useContext(UserContext);

  useEffect(() => {
    userCtx.logIn(JSON.parse(sessionStorage.getItem("logged")));
    console.log(sessionStorage.getItem("logged"));
  }, [userCtx]);
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
          <Route path={"/login"} exact component={LoginForm} />
          <Route path={"/register"} exact component={RegisterForm} />
          <Route path={"/favList"} exact component={FavouriteList} />
          <Route path={"/favList"} exact component={FavouriteList} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
