import React from "react";

const UserContext = React.createContext({
  isLoggedIn: false,
  onLogIn: () => {},
  onLogOut: () => {},
  lang: "en",
  theme: "light",
});

export default UserContext;
