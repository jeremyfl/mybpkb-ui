import React from "../../../Library/Caches/typescript/2.9/node_modules/@types/react";
import ReactDOM from "../../../Library/Caches/typescript/2.9/node_modules/@types/react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

// define base url for every endpoint
const server = window.location.host;
if (server === "http://localhost:3000/") {
  axios.defaults.baseURL = "http://127.0.0.1:3333/";
} else {
  axios.defaults.baseURL = "https://api.mybpkb.com/";
}

axios.defaults.baseURL = "http://127.0.0.1:3333/";

axios.defaults.withCredentials = true;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
