import React, { Component } from "react";
import LazyLoad from "react-lazyload";

import provisi from "./../../images/wom/provisi.svg";
import waktucepat from "./../../images/wom/waktu.svg";
import utuh from "./../../images/wom/utuh.svg";
import notip from "./../../images/wom/no-tip.svg";
import transparan from "./../../images/wom/transparan.svg";
import cabang from "./../../images/wom/cabang.svg";

export default class ShortKelebihanWom extends Component {
  render() {
    return (
      <div id="kelebihan-wom" style={{ marginTop: 40 }}>
        <div className="row">
          <div className="col-lg-4">
            <div className="row">
              <div className="col-2">
                <LazyLoad once>
                  <img src={provisi} alt="" />
                </LazyLoad>
              </div>
              <div className="col-10">
                <h5>Biaya Provisi 0%</h5>
                <p>Kami tidak mengenakan biaya provisi</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-2">
                <LazyLoad once>
                  <img src={utuh} alt="" />
                </LazyLoad>
              </div>
              <div className="col-10">
                <h5>Cair Cepat & Utuh</h5>
                <p>
                  Cair Cepat 1x24 Jam & Utuh tanpa potongan langsung dari
                  Finance kantor pusat
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-2">
                <LazyLoad once>
                  <img src={transparan} alt="" />
                </LazyLoad>
              </div>
              <div className="col-10">
                <h5>Efisien & Transparan</h5>
                <p>Bisa menghitung simulasi on spot di halaman website</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="row">
              <div className="col-2">
                <LazyLoad once>
                  <img src={waktucepat} alt="" />
                </LazyLoad>
              </div>
              <div className="col-10">
                <h5>Cair dalam 30 Menit</h5>
                <p>Khusus Motor</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-2">
                <LazyLoad once>
                  <img src={cabang} alt="" />
                </LazyLoad>
              </div>
              <div className="col-10">
                <h5>Jangkauan Luas</h5>
                <p>Jumlah 300 cabang dan pos cabang di seluruh Indonesia.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-2">
                <LazyLoad once>
                  <img src={notip} alt="" />
                </LazyLoad>
              </div>
              <div className="col-10">
                <h5>No Tipping & Fee</h5>
                <p>Semua proses dilakukan secara profesional dan transparan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
