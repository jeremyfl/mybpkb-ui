import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import MobilRequest from "./pages/MobilRequest";
import Motor from "./pages/Motor";
import Contact from "./pages/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <div
          style={{
            backgroundColor: "#F1F3F5",
            height: "100%",
            minHeight: "100vh"
          }}
        >
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/simulasi/mobil" component={MobilRequest} />
          <Route exact path="/simulasi/motor" component={Motor} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
