import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:3333/";
axios.defaults.withCredentials = true;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
