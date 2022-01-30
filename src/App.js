import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserContext from "./store/user-context";

import Navbar from "./components/Navbar";
import LoginForm from "./components/Form/LoginForm";
import Movies from "./pages/Movies";
import MoviePage from "./pages/MoviePage";
import MovieSearch from "./pages/MovieSearch";
import FavouriteList from "./pages/FavouriteList";
import RegisterForm from "./components/Form/RegisterForm"
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./credentials"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Initialize Firebase
const app = initializeApp(firebaseConfig);



/**
 * TODO: add **useState** to change the values of the isLoggedIn and theme and lang
 */
function App() {
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState("light");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onLogInHandler = () => {
    console.log("triggerd");
    setIsLoggedIn(true);
    sessionStorage.setItem("logged", true);
  };
  const onLogOutHandler = () => {
    console.log("triggerd");
    setIsLoggedIn(false);
    sessionStorage.setItem("logged", false);
  };
const onLangToggel = () =>{
  if (lang=="en"){

    setLang("ar")
  }else{
    setLang("en")
  }
}
  useEffect(() => {
    setIsLoggedIn(JSON.parse(sessionStorage.getItem("logged")));
    console.log(sessionStorage.getItem("logged"));
  }, []);
  return (
    <UserContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogIn: onLogInHandler,
        onLogOut: onLogOutHandler,
        lang: lang,
        theme: theme,
        toggleLang: onLangToggel,
      }}
    >
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
    </UserContext.Provider>
  );
}

export default App;
