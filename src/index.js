import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style.scss";
import { Provider } from "react-redux";
import store from "./store/index"
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
