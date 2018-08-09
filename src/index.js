import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

// define base url for every endpoint
const server = window.location.host;

if (server === "127.0.0.1:3334" || server === "localhost:3334") {
  axios.defaults.baseURL = "http://127.0.0.1:3333/";
} else {
  axios.defaults.baseURL = "https://api.mybpkb.com/";
}

axios.defaults.withCredentials = true;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
