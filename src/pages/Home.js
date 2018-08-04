import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
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
    );
  }
}
