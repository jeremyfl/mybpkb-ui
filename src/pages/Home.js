import React, { Component } from "react";
import { Link } from "react-router-dom";

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
            <div className="carousel-inner" role="listbox">
              {/* Slide One - Set the background image for this slide in the line below */}
              <div
                className="carousel-item active"
                style={{
                  backgroundImage:
                    'url("https://www.mybpkb.com/wp-content/uploads/2018/03/banner-13-maret.png")'
                }}
              >
                {/* <div className="carousel-caption d-none d-md-block">
                  <h3>First Slide</h3>
                  <p>This is a description for the first slide.</p>
                </div> */}
              </div>
              {/* Slide Two - Set the background image for this slide in the line below */}
              <div
                className="carousel-item"
                style={{
                  backgroundImage:
                    'url("https://image.ibb.co/e4xUZT/gedungwom.jpg")'
                }}
              >
                {/* <div className="carousel-caption d-none d-md-block">
                  <h3>Second Slide</h3>
                  <p>This is a description for the second slide.</p>
                </div> */}
              </div>
              {/* Slide Three - Set the background image for this slide in the line below */}
              <div
                className="carousel-item"
                style={{
                  backgroundImage:
                    'url("https://www.wom.co.id/upload-iklan/e803b1304d3c58cc279b9f42ef7cc43b2c871f2d.jpg")'
                }}
              >
                {/* <div className="carousel-caption d-none d-md-block">
                  <h3>Third Slide</h3>
                  <p>This is a description for the third slide.</p>
                </div> */}
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

        <div>
          <div className="container">
            <div style={{ marginTop: 40, marginBottom: 40 }}>
              <h3 className="text-center">Silahkan Pilih Kendaraan Anda</h3>
              <p className="text-center">Kendaraan Ingin Anda Anggunkan</p>
            </div>

            <div id="mobile" className="d-md-none">
              <div className="card">
                <ul className="list-group list-group-flush">
                  <Link className="list-group-item" to="/simulasi/mobil">
                    <i className="fas fa-car" style={{ marginRight: 10 }} />
                    Gadai Mobil
                  </Link>
                  <Link className="list-group-item" to="/simulasi/motor">
                    <i
                      className="fas fa-motorcycle"
                      style={{ marginRight: 10 }}
                    />
                    Gadai Motor
                  </Link>
                  <Link
                    className="list-group-item disabled"
                    to="/simulasi/truck"
                  >
                    <i className="fas fa-truck" style={{ marginRight: 10 }} />
                    Gadai Truck
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
                        Range bunga 10.8% sd 12.5% pertahun
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
                        src="https://mybpkb-landing.surge.sh/images/new/Point%203.png"
                        alt=""
                        // className=""
                        style={{
                          width: 300,
                          height: 300
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <h3 className="text-left">Mengapa Kami?</h3>

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

                    <button type="button" class="btn btn-outline-info btn-lg">
                      Lihat Persyaratan
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
