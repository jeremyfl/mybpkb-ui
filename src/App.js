import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Mobil from "./pages/Mobil";
import Motor from "./pages/Motor";
import Pertanyaan from "./pages/Pertanyaan";
import Contact from "./pages/Contact";

import ReactGA from "react-ga";
ReactGA.initialize("UA-69507016-2");
ReactGA.pageview(window.location.pathname + window.location.search);

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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/simulasi/mobil" component={Mobil} />
            <Route exact path="/simulasi/motor" component={Motor} />
            <Route exact path="/faq" component={Pertanyaan} />
            <Route exact path="/contact" component={Contact} />
            <Route render={() => <p>Not Found</p>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
