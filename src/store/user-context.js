import React from "react";

const UserContext = React.createContext({
  isLoggedIn: false,
  onLogIn: () => {},
  onLogOut: () => {},
  lang: "en",
  toggleLang: ()=>{},
  theme: "light",
});

export default UserContext;
