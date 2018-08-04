import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark navbar-expand-md bg-primary">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              MyBPKB Simulasi
            </Link>

            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navcol-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="nav navbar-nav">
                <li className="nav-item" role="presentation">
                  <Link className="nav-link active" to="/simulasi/mobil">
                    Simulasi Mobil
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link className="nav-link active" to="/simulasi/motor">
                    Simulasi Motor
                  </Link>
                </li>

                <li className="nav-item" role="presentation">
                  <Link className="nav-link active" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
