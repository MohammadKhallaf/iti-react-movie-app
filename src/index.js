import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style.scss";

import store from "./store/index";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
