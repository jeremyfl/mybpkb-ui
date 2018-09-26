import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="link">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <h5 className="font-weight-bold">Head Office WOM Finance</h5>
                <span className="font-weight-bold">Altira Office Tower</span>
                <p>
                  Jl. Yos Sudarso Kav.85 Suter Jaya Tanjung Priok, Jakarta Utara
                </p>
              </div>
              <div className="col-lg-4">
                <h5 className="font-weight-bold">Direct Mobilku & Motorku</h5>
                <ul>
                  <li>
                    <a href="tel:081288788836">0812-8878-8836</a>
                  </li>
                  <li>
                    <a href="tel:02155723936">021-55723936</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <h5 className="font-weight-bold">Info Lainnya</h5>
                <ul>
                  <li>
                    <Link to="/simulasi/mobil">Gadai BPKB Mobil</Link>
                  </li>
                  <li>
                    <Link to="/simulasi/motor">Gadai BPKB Motor</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-left copyright">
          <div className="container">
            <span>
              <strong>Copyright 2018 MyBPKB</strong>
            </span>
          </div>
        </div>
      </footer>
    );
  }
}
