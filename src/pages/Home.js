import React, { Component } from "react";
import { Link } from "react-router-dom";

// section
import Persyaratan from "./section/Persyaratan";
import Statistik from "./section/Statistik";

// Males load
import LazyLoad from "react-lazyload";

import slide1 from "../images/banner_1.jpg";
import slide2 from "../images/banner_2.jpg";
import slide3 from "../images/banner_3.jpg";

// pelajari
import money from "../images/money.svg";

export default class Home extends Component {
  render() {
    return (
      <section>
        <header>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <LazyLoad once>
                  <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                  />
                </LazyLoad>
              </div>
              <div className="carousel-item">
                <LazyLoad once>
                  <img
                    className="d-block w-100"
                    src={slide2}
                    alt="First slide"
                  />
                </LazyLoad>
              </div>
              <div className="carousel-item">
                <LazyLoad once>
                  <img
                    className="d-block w-100"
                    src={slide3}
                    alt="First slide"
                  />
                </LazyLoad>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </header>
        <div id="pilih-simulasi">
          <div className="container">
            <div style={{ marginTop: 20, marginBottom: 20 }}>
              <h2 className="text-center">Simulasikan Kendaraan Anda</h2>
              <p className="text-center">
                Anda akan mendapatkan total pencairan, angsuran, dan lama tenor
                yang bisa anda pilih.
              </p>
            </div>

            <div id="mobile" className="d-md-none">
              <div className="card">
                <ul className="list-group list-group-flush">
                  <Link className="list-group-item" to="/simulasi/mobil">
                    <i className="fas fa-car" style={{ marginRight: 10 }} />
                    Simulasi Gadai BPKB Mobil
                  </Link>
                  <Link className="list-group-item" to="/simulasi/motor">
                    <i
                      className="fas fa-motorcycle"
                      style={{ marginRight: 10 }}
                    />
                    Simulasi Gadai BPKB Motor
                  </Link>
                  <a
                    href="https://api.whatsapp.com/send?phone=6281288788836"
                    className="list-group-item"
                  >
                    <i className="fas fa-truck" style={{ marginRight: 10 }} />
                    Gadai BPKB Truck
                  </a>
                </ul>
              </div>
            </div>

            <div
              id="desktop"
              className="d-none d-md-block d-sm-none col-md-8 offset-md-2"
            >
              <div className="card" style={{ marginTop: 5, marginBottom: 5 }}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="float-left">
                        <i
                          className="fas fa-motorcycle"
                          style={{
                            fontSize: 50,
                            textAlign: "center",
                            display: "block",
                            marginRight: 20
                          }}
                        />
                      </div>
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
                    <div className="col-md-9">
                      <div className="float-left">
                        <i
                          className="fas fa-car"
                          style={{
                            fontSize: 50,
                            textAlign: "center",
                            display: "block",
                            marginRight: 20
                          }}
                        />
                      </div>
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
                    <div className="col-md-9">
                      <div className="float-left">
                        <i
                          className="fas fa-truck"
                          style={{
                            fontSize: 50,
                            textAlign: "center",
                            display: "block",
                            marginRight: 20
                          }}
                        />
                      </div>
                      <h5 className="card-title">Simulasi Kendaraan Truck</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        Saat ini belum tersedia
                      </h6>
                    </div>
                    <div className="col-md-3">
                      <a
                        href="https://api.whatsapp.com/send?phone=6281288788836"
                        className="btn btn-success btn-block"
                      >
                        Hitung
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="pelajari" className="white-bg img-bottom">
          <div className="container">
            <div className="col-lg-8 offset-lg-2">
              <div className="text-center">
                <h3>
                  Kami membantu konsumen yang sedang membutuhkan dana tunai
                </h3>

                <p className="lead">
                  Seperti untuk keperluan modal usaha, biaya Pendidikan,
                  kesehatan, renovasi, dan kebutuhan mendesak lainnya.
                </p>

                <a
                  href="#persyaratan"
                  style={{ marginBottom: 50, color: "white" }}
                  role="button"
                  className="btn btn-info"
                >
                  Lihat Persyaratannya
                </a>

                <div className="clearfix" />

                <img
                  src={money}
                  alt=""
                  className="image-pelajari"
                  style={{
                    width: 200,
                    height: 200
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <Persyaratan />

        <div
          id="about-home"
          className="gedung-wom"
          style={{ backgroundPosition: "center center" }}
        >
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-white">
                <h3>Siapa Kami?</h3>
                <p className="lead">
                  Kami adalah Divisi Pembiayaan Multiguna WOM Finance.
                </p>

                <Statistik />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
