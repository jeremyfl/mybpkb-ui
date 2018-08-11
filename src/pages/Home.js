import React, { Component } from "react";

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
            <h3 className="text-center">
              Pilih Kendaraan Yang Ingin Anda Anggunkan
            </h3>
            <p className="text-center">Mobil, Motor & Truck</p>
          </div>

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
                  <a href="#" className="btn btn-success btn-block">
                    Hitung
                  </a>
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
                  <a href="#" className="btn btn-success btn-block">
                    Hitung
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
