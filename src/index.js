import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "bootstrap/dist/js/bootstrap.bundle";

import "./style.scss";

import store from "./store/index";
import App from "./App";
import { UserContextProvider } from "./store/user-context";

ReactDOM.render(
  <Provider store={store}>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </Provider>,
  document.getElementById("root")
);
