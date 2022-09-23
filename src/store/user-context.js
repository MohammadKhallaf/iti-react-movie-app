import React, { useState } from "react";

const UserContext = React.createContext({
  isLoggedIn: false,
  logIn: () => {},
  logOut: () => {},
  lang: "en",
  toggleLang: () => {},
  theme: "light",
});

export const UserContextProvider = (props) => {
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
  const onLangToggle = () => {
    if (lang === "en") {
      setLang("ar");
    } else {
      setLang("en");
    }
  };

  const contxtValue = {
    isLoggedIn: isLoggedIn,
    logIn: onLogInHandler,
    logOut: onLogOutHandler,
    lang: lang,
    theme: theme,
    toggleLang: onLangToggle,
  };
  return (
    <UserContext.Provider value={contxtValue}>
      {/* {props.children} */}
      {React.Children.only(props.children)}
    </UserContext.Provider>
  );
};

export default UserContext;
