import React, { Component } from "react";
import hitung from "../../images/hitung_simulasi.svg";
import carcheck from "../../images/car_check.svg";
import sepakat from "../../images/statistik/sepakat.svg";
import money from "../../images/money.svg";

// Males load
import LazyLoad from "react-lazyload";
export default class Proses extends Component {
  render() {
    return (
      <div id="persyaratan" style={{ marginBottom: 90 }}>
        <div className="container text-center">
          <h3 style={{ marginTop: 20, marginBottom: 20 }}>
            Bagaimana Prosesnya?
          </h3>

          <div className="row ilustration">
            <div className="col-lg-3">
              <LazyLoad height={90} once>
                <img src={hitung} alt="" />
              </LazyLoad>
              <h4>1. Melakukan Simulasi</h4>
              <p>Atau langsung menghubungi kami</p>
            </div>
            <div className="col-lg-3">
              <LazyLoad height={90} once>
                <img src={carcheck} alt="" />
              </LazyLoad>
              <h4>2. Data Dijemput</h4>
              <p>Dan Cek Fisik Kendaraan</p>
            </div>
            <div className="col-lg-3">
              <LazyLoad height={90} once>
                <img src={sepakat} alt="" />
              </LazyLoad>
              <h4>3. Perstujuan Pembiayaan</h4>
            </div>
            <div className="col-lg-3">
              <LazyLoad height={90} once>
                <img src={money} alt="" />
              </LazyLoad>
              <h4>4. Dana Cair</h4>
            </div>
          </div>

          <p className="lead">Coba simulasi sekarang</p>
          <a className="btn btn-warning" href="#pilih-simulasi" role="button">
            Ajukan Sekarang
          </a>
        </div>
      </div>
    );
  }
}
