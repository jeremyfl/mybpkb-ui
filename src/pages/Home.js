import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <section>
        <div
          className="highlight-blue"
          style={{
            background: "#1e6add",
            paddingTop: "100px",
            paddingBottom: "100px"
          }}
        >
          <div className="container" style={{ color: "white" }}>
            <div className="intro">
              <h2 className="text-center">Home</h2>
              <p className="lead text-center">
                Aplikasi Simulasi Kredit WOM Finance
              </p>
            </div>
          </div>
        </div>
        <div className="container" style={{ paddingBottom: "50px" }}>
          <div style={{ marginTop: 40, marginBottom: 40 }}>
            <h3 className="text-center">Hi!, Silahkan Pilih Kendaraan</h3>
            <p className="text-center">Yang Ingin Anda Anggunkan</p>
          </div>

          <div id="mobile" className="d-md-none">
            <div className="card">
              <ul className="list-group list-group-flush">
                <Link className="list-group-item" to="/simulasi/mobil">
                  <i className="fas fa-car" style={{ marginRight: 10 }} />
                  Gadai Mobil
                </Link>
                <Link className="list-group-item" to="/simulasi/motor">
                  <i
                    className="fas fa-motorcycle"
                    style={{ marginRight: 10 }}
                  />
                  Gadai Mobil
                </Link>
                <Link className="list-group-item disabled" to="/simulasi/truck">
                  <i className="fas fa-truck" style={{ marginRight: 10 }} />
                  Gadai Truck
                </Link>
              </ul>
            </div>
          </div>

          <div id="desktop" className="d-none d-lg-block d-sm-none">
            <div className="card" style={{ marginTop: 5, marginBottom: 5 }}>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-1">
                    <i
                      className="fas fa-car"
                      style={{
                        fontSize: 50,
                        textAlign: "center",
                        display: "block"
                      }}
                    />
                  </div>
                  <div className="col-md-8">
                    <h5 className="card-title">Simulasi Kendaraan Mobil</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Range bunga 10.8% sd 12.5% pertahun
                    </h6>
                  </div>
                  <div className="col-md-3">
                    <Link
                      to="/simulasi/motor"
                      className="btn btn-success btn-block"
                    >
                      Hitung
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" style={{ marginTop: 5, marginBottom: 5 }}>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-1">
                    <i
                      className="fas fa-motorcycle"
                      style={{
                        fontSize: 50,
                        textAlign: "center",
                        display: "block"
                      }}
                    />
                  </div>
                  <div className="col-md-8">
                    <h5 className="card-title">Simulasi Kendaraan Motor</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Range bunga 10.8% sd 12.5% pertahun
                    </h6>
                  </div>
                  <div className="col-md-3">
                    <Link
                      to="/simulasi/motor"
                      className="btn btn-success btn-block"
                    >
                      Hitung
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
