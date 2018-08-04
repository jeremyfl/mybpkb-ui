import React, { Component } from "react";

export default class Motor extends Component {
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
              <h2 className="text-center">Simulasi Motor</h2>
              <p className="lead text-center">
                Kredit Tanpa Agunan WOM Finance
              </p>
            </div>
          </div>
        </div>

        <div
          className="container"
          style={{ marginTop: "-60px", paddingBottom: "50px" }}
        >
          <div className="col-lg-8 offset-lg-2">
            <div className="card">
              <div className="card-body">
                <div className="alert alert-warning" role="alert">
                  <strong>Maaf, </strong>
                  Untuk saat ini layanan ini belum tersedia
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
