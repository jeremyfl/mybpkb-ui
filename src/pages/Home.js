import React, { Component } from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

// SECTION
import Slider from "./components/Slider";
import Persyaratan from "./section/Persyaratan";
import Statistik from "./section/Statistik";
import ShortKelebihanWom from "./section/ShortKelebihanWom";

// Some Icon & Images
import money from "../images/money.svg";
import wom from "../images/partner/wom.png";
import appi from "../images/partner/appi.png";
import ojk from "../images/partner/ojk.png";

export default class Home extends Component {
  render() {
    return (
      <section>
        <Slider />

        <div id="pilih-simulasi">
          <div className="container">
            <div style={{ marginTop: 20, marginBottom: 20 }}>
              <h3 className="text-center">Simulasikan Kendaraan Anda</h3>
              <p className="text-center">
                Anda akan mendapatkan total pencairan, angsuran, dan lama tenor
                yang bisa anda pilih.
              </p>
            </div>

            <div id="mobile" className="col-sm-12 col-lg-8 offset-lg-2">
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

        <div id="about-home" className="white-bg">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h3>Siapa Kami?</h3>
                <p className="lead">
                  Kami adalah Divisi Digital Pembiayaan Multiguna Nasional Wom
                  Finance.
                </p>

                <Statistik />
              </div>
            </div>
          </div>
        </div>

        <div id="about-wom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h3>Apa itu WOM Finance?</h3>
                <p>
                  PT Wahana Ottomitra Multiartha Tbk (“WOM Finance” atau
                  Perseroan) Didirikan pada tahun 1982 dengan nama PT Jakarta
                  Tokyo Leasing yang bergerak di bidang pembiayaan sepeda motor,
                  khususnya pembiayaan untuk sepeda motor merek Honda.
                </p>
                <p>
                  Perseroan terus berupaya untuk mewujudkan visi Perseroan
                  menjadi salah satu perusahaan pembiayaan terbaik di Indonesia.
                  Untuk itu, Perseroan akan terus meningkatkan kualitas layanan
                  yang diberikan kepada seluruh pelanggan, salah satunya dengan
                  memanfaatkan perkembangan Teknologi Informasi, sehingga
                  pelanggan dapat terlayani dengan cepat, tepat, efektif, dan
                  efisien.
                </p>
                <a className="btn btn-info disabled" href="" role="button">
                  <i className="fas fa-plus" style={{ marginRight: 10 }} />
                  Selengkapnya
                </a>
              </div>
            </div>

            <ShortKelebihanWom />
          </div>
        </div>

        <div id="partnership">
          <div className="container text-center">
            <div className="col-lg-8 offset-lg-2">
              <div className="row">
                <div className="col-4">
                  <LazyLoad once>
                    <img className="img-fluid" src={wom} alt="" />
                  </LazyLoad>
                </div>
                <div className="col-4">
                  <LazyLoad once>
                    <img className="img-fluid" src={appi} alt="" />
                  </LazyLoad>
                </div>
                <div className="col-4">
                  <LazyLoad once>
                    <img className="img-fluid" src={ojk} alt="" />
                  </LazyLoad>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
