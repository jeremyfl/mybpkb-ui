import React, { Component } from "react";

import founded from "../../images/statistik/founded.svg";
import sepakat from "../../images/statistik/sepakat.svg";
import happyman from "../../images/statistik/happy_client.svg";
import dana from "../../images/statistik/dana_cair.svg";

// Males load
import LazyLoad from "react-lazyload";

// Count animate
import "react-count-animation/dist/count.min.css";
import AnimationCount from "react-count-animation";

export default class Statistik extends Component {
  render() {
    const clientCount = {
      start: 0,
      count: 5000,
      duration: 2000,
      useGroup: true,
      animation: "up"
    };
    const sepakatCount = {
      start: 0,
      count: 5000,
      duration: 2000,
      useGroup: true,
      animation: "up"
    };
    const danaCount = {
      start: 0,
      count: 50000000,
      duration: 2000,
      useGroup: true,
      animation: "up"
    };

    return (
      <div className="ilustration">
        <div className="row">
          <div className="col-lg-3">
            <LazyLoad once>
              <img src={founded} alt="" />
            </LazyLoad>
            <h4>Januari 2008</h4>
            <small>Founded</small>
          </div>
          <div className="col-lg-3">
            <LazyLoad once>
              <img src={happyman} alt="" />
            </LazyLoad>
            <h4>
              <AnimationCount {...clientCount} /> Client
            </h4>
            <small>Sejak 2008</small>
          </div>
          <div className="col-lg-3">
            <LazyLoad once>
              <img src={sepakat} alt="" />
            </LazyLoad>
            <h4>
              <AnimationCount {...sepakatCount} /> Transaksi
            </h4>
            <small>Mobil & Motor</small>
          </div>
          <div className="col-lg-3">
            <LazyLoad once>
              <img src={dana} alt="" />
            </LazyLoad>
            <h4>
              Sebesar
              <AnimationCount {...danaCount} />
            </h4>
            <small>Juta Dana Sudah Dicairkan</small>
          </div>
        </div>
      </div>
    );
  }
}
