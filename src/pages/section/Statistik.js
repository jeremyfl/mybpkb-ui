import React, { Component } from "react";

import founded from "../../images/statistik/founded.svg";
import sepakat from "../../images/statistik/sepakat.svg";
import happyman from "../../images/statistik/happy_client.svg";
import dana from "../../images/statistik/dana_cair.svg";

// Counter
import CountUp from "react-countup";

// Males load
import LazyLoad from "react-lazyload";

export default class Statistik extends Component {
  render() {
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
              <CountUp endCountUp end={50000} />+ Client
            </h4>
            <small>Sejak 2015</small>
          </div>
          <div className="col-6 col-lg-3">
            <LazyLoad height={90} once>
              <img src={sepakat} alt="" />
            </LazyLoad>
            <h4>
              <CountUp endCountUp end={50000} />+
            </h4>
            <small>Pengajuan Mobil & Motor</small>
          </div>
          <div className="col-6 col-lg-3">
            <LazyLoad height={90} once>
              <img src={dana} alt="" />
            </LazyLoad>
            <h4>
              <CountUp endCountUp end={84} />M
            </h4>
            <small>Dana Telah Cair</small>
          </div>
        </div>
      </div>
    );
  }
}
