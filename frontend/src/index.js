import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./bootstrap.min.css";
import { provider } from "react-redux";
import store from "./store";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <provider store={store}>
    <App />
  </provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
