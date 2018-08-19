import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer
        className="footer"
        style={{
          background: "#fff",
          borderTop: "1px solid rgba(0, 0, 0, 0.125)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.125)"
        }}
      >
        <div className="container">
          <div className="text-center">
            <span className="">
              <strong>Copyright 2018 MyBPKB</strong>
            </span>
          </div>
        </div>
      </footer>
    );
  }
}
