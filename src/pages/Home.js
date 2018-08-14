import React, { Component } from "react";
import { Link } from "react-router-dom";
import like from "../images/like.svg";

export default class Home extends Component {
  render() {
    return (
      <section>
        <div>
          <div className="container" id="pilih-simulasi">
            <div style={{ marginTop: 40, marginBottom: 40 }}>
              <h3 className="text-center">Pilih Kendaraan Anda</h3>
              <p className="text-center">
                Hi!, Silahkan Pilih Jenis Kendaraan Yang Ingin Anda Anggunkan
                Dibawah
              </p>
            </div>

            <div id="mobile" className="d-md-none">
              <div className="card">
                <ul className="list-group list-group-flush">
                  <Link className="list-group-item" to="/simulasi/mobil">
                    <i className="fas fa-car" style={{ marginRight: 10 }} />
                    Gadai BPKB Mobil
                  </Link>
                  <Link className="list-group-item" to="/simulasi/motor">
                    <i
                      className="fas fa-motorcycle"
                      style={{ marginRight: 10 }}
                    />
                    Gadai BPKB Motor
                  </Link>
                  <Link
                    className="list-group-item disabled"
                    to="/simulasi/truck"
                  >
                    <i className="fas fa-truck" style={{ marginRight: 10 }} />
                    Gadai BPKB Truck
                  </Link>
                </ul>
              </div>
            </div>

            <div id="desktop" className="d-none d-md-block d-sm-none">
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
                      <Link
                        to="/simulasi/mobil"
                        className="btn btn-success btn-block"
                      >
                        Hitung
                      </Link>
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
                        Range bunga 1.9% sd 21.09% pertahun
                      </h6>
                    </div>
                    <div className="col-md-3">
                      <Link
                        to="/simulasi/motor"
                        className="btn btn-success btn-block"
                      >
                        Hitung
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card" style={{ marginTop: 5, marginBottom: 5 }}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-1">
                      <i
                        className="fas fa-truck"
                        style={{
                          fontSize: 50,
                          textAlign: "center",
                          display: "block"
                        }}
                      />
                    </div>
                    <div className="col-md-8">
                      <h5 className="card-title">Simulasi Kendaraan Truck</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        Saat ini belum tersedia
                      </h6>
                    </div>
                    <div className="col-md-3">
                      <Link
                        to="/simulasi/motor"
                        className="btn btn-success btn-block disabled"
                      >
                        Hitung
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="pelajari">
            <div className="container">
              <div style={{ marginTop: 20, marginBottom: 20 }}>
                <div className="row">
                  <div className="col-lg-5">
                    <div class="text-center">
                      <img
                        src={like}
                        alt=""
                        // className=""
                        style={{
                          width: 200,
                          height: 200
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <h3
                      className="text-left"
                      style={{ marginTop: 20, marginBottom: 20 }}
                    >
                      Mengapa Kami?
                    </h3>

                    <p className="lead">
                      Kami merupakan divisi dari Wom Finance yang fokus pada
                      pemasaran digital produk Pembiayaan Multiguna jaminan BPKB
                      Mobil, Motor & Truck.
                    </p>

                    <p className="lead">
                      Kami membantu para calon konsumen yang sedang membutuhkan
                      dana tunai. Seperti untuk keperluan modal usaha, biaya
                      Pendidikan, kesehatan, renovasi, dan kebutuhan mendesak
                      lainnya.
                    </p>

                    <button
                      onClick={() => {
                        window.location.href = "https://www.mybpkb.com";
                      }}
                      type="button"
                      class="btn btn-info btn-lg"
                    >
                      Pelajari
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
