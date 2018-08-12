import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";
import CurrencyFormat from "react-currency-format";

window.jQuery = $;
window.$ = $;
require("easy-autocomplete");

export default class Pertanyaan extends Component {
  render() {
    return (
      <section>
        <div
          className="highlight-blue office-wom"
          style={{
            // background: "#1e6add",
            paddingTop: "100px",
            paddingBottom: "100px"
          }}
        >
          <div className="container" style={{ color: "white" }}>
            <div className="intro">
              <h2 className="text-center">FAQ</h2>
              <p className="lead text-center">
                Pertanyaan & Jawaban Mengenai Layanan MyBPKB
              </p>
            </div>
          </div>
        </div>

        <div
          className="container"
          style={{ marginTop: "-60px", paddingBottom: "50px" }}
        >
          <div className="col-lg-8 offset-lg-2">
            <div className="card card-formulir">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <h5 className="card-title">
                    Apakah BPKB Aman jika melakukan Pinjaman di WOM Finance ?
                  </h5>
                  <p className="card-text">
                    Ya. Tentu saja aman. Karena kami merupakan perusahaan
                    pembiayaan berstatus Tbk yang berdiri sejak Th 1982. Kami
                    telah terdaftar di APPI dan OJK.
                  </p>
                </li>
                <li className="list-group-item">
                  <h5 className="card-title">
                    Bagaimana jika pelunasan di percepat ?
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">Mobilku</h6>
                  <p className="card-text">
                    Konsumen dapat melakukan pelunasan percepatan dengan syarat
                    :
                    <ul>
                      <li>
                        Jika pembayaran angsuran sebelum memasuki tenor ke-10,
                        perhitungannya adalah sisa tenor di kali sisa angsuran.
                      </li>
                      <li>
                        Jika pembayaran angsuran telah dari 10 kali angsuran,
                        maka perhitungannya sisa pokok hutang yang telah
                        dihilangkan bunganya dikalikan Penalty sebesar 10%.
                      </li>
                    </ul>
                    <p />
                    <h6 className="card-subtitle mb-2 text-muted">Motorku</h6>
                    <p className="card-text">
                      <ul>
                        <li>Angsuran dikalikan sisa tenor pinjaman.</li>
                      </ul>
                    </p>
                  </p>
                </li>
                <li className="list-group-item">
                  <h5 className="card-title">
                    Jika STNK mati atau masih nama org lain apakah bisa ?
                  </h5>
                  <p className="card-text">
                    Untuk mobilKu & MotorKu. Jika stnk mati sebelum 12 bulan
                    masih bisa. Namun jika sudah lebih dari 12 bulan atau 1
                    tahun. Wajib dibalik nama.
                  </p>
                </li>
                <li className="list-group-item">
                  <h5 className="card-title">Apakah Wajib Survey ke rumah ?</h5>
                  <p className="card-text">
                    Sesuai SOP dari perusahaan dan peraturan OJK. Wajib survey
                    ke rumah. Bisa disurvey ke kantor terlebih dahulu untuk
                    mempercepat proses. Namun setelah itu tetap di survey ke
                    rumah. Dan jika sudah berkeluarga, pasangan wajib
                    mengetahui.
                  </p>
                </li>
                <li className="list-group-item">
                  <h5 className="card-title">
                    Apakah KTP daerah bisa melakukan pinjaman jaminan Bpkb ?
                  </h5>
                  <p className="card-text">
                    <h6 className="card-subtitle mb-2 text-muted">MotorKu</h6>
                    Mohon maaf untuk KTP daerah belom bisa.
                    <p />
                    <h6 className="card-subtitle mb-2 text-muted">MobilKu</h6>
                    KTP daerah dan plat daerah masih bisa asalkan atas nama
                    sendiri Bpkb nya.
                  </p>
                </li>
                <li className="list-group-item">
                  <h5 className="card-title">
                    Apakah tinggal di Apartemen bisa ?
                  </h5>
                  <p className="card-text">
                    Untuk sementara jika tinggal di Apartemen tidak bisa,
                    kecuali memiliki rumah tinggal lain selain Apartemen.
                  </p>
                </li>
                <li className="list-group-item">
                  <h5 className="card-title">Apakah tinggal kontrak bisa ?</h5>
                  <p className="card-text">Bisa jika kontrak tahunan.</p>
                </li>
                <li className="list-group-item">
                  <h5 className="card-title">
                    Apakah WOM Finance bisa melakukan Take Over ?
                  </h5>
                  <p className="card-text">
                    <ul>
                      <li>
                        Take over untuk motor minimal 6 kali lagi dan masih
                        plus/masih ada lebih.
                      </li>
                      <li>
                        Untuk Mobil bisa. Yang paling utama adalah History
                        pembayaran di leasing sebelumnya bagus, minimal tidak
                        pernah ada telat pembayaran lebih dari 30 hari.
                      </li>
                    </ul>
                  </p>
                </li>
                <li className="list-group-item">
                  <h5 className="card-title">
                    Apakah KTP daerah dan plat daerah bisa ?
                  </h5>
                  <p className="card-text">
                    Untuk mobilku bisa. Asalkan atas nama sendiri kendaraannya.
                    Untuk motor tidak bisa.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
