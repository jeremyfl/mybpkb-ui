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
      count: 84,
      duration: 5000,
      useGroup: true,
      animation: "up"
    };

    return (
      <div className="ilustration">
        <div className="row">
          <div className="col-6 col-lg-3">
            <LazyLoad height={90} once>
              <img src={founded} alt="" />
            </LazyLoad>
            <h4>Oktober 2015</h4>
            <small>Founded</small>
          </div>
          <div className="col-6 col-lg-3">
            <LazyLoad height={90} once>
              <img src={happyman} alt="" />
            </LazyLoad>
            <h4>
              <AnimationCount {...clientCount} />
            </h4>
            <small>Happy Client</small>
          </div>
          <div className="col-6 col-lg-3">
            <LazyLoad height={90} once>
              <img src={sepakat} alt="" />
            </LazyLoad>
            <h4>
              <AnimationCount {...sepakatCount} />
            </h4>
            <small>Pengajuan Mobil & Motor</small>
          </div>
          <div className="col-6 col-lg-3">
            <LazyLoad height={90} once>
              <img src={dana} alt="" />
            </LazyLoad>
            <h4>
              <AnimationCount {...danaCount} />
            </h4>
            <small>Miliar Dana Cair</small>
          </div>
        </div>
      </div>
    );
  }
}
