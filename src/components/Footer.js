import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer className="text-light">
        <div className="link">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <h5 className="font-weight-bold">Head Office</h5>
                <span className="font-weight-bold">Altira Office Tower</span>
                <p>
                  Jl. Yos Sudarso Kav.85 Suter Jaya Tanjung Priok, Jakarta Utara
                </p>
              </div>
              <div className="col-lg-4">
                <h5 className="font-weight-bold">Kontak Telepon</h5>
                <ul>
                  <li>
                    <a href="tel:6281385689789">+6281385689789 (Motorku)</a>
                  </li>
                  <li>
                    <a href="tel:6281288788836">+6281288788836 (Mobilku)</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <h5 className="font-weight-bold">Info Lainnya</h5>
                <ul>
                  <li>
                    <a href="https://about.mybpkb.com">Tentang Kami</a>
                  </li>
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

        <div className="text-center copyright">
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
