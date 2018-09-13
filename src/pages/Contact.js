import React, { Component } from "react";
import $ from "jquery";
import axios from "axios";
import { Link } from "react-router-dom";

// image
import asking from "./../images/asking.svg";

export default class Contact extends Component {
  componentDidMount = () => {
    $("#pertanyaan-lain").hide();
  };

  submitButton(event) {
    event.preventDefault();
    const request = {
      nama: event.target.nama.value,
      no_tlp: event.target.no_tlp.value,
      alamat: event.target.alamat.value,
      pesan: event.target.pesan.value
    };

    // send to API
    axios
      .post("contact", request)
      .then(response => {
        // clear all input
        document.getElementById("formulirKontak").reset();

        // scroll to pertanyaan lain
        $("#pertanyaan-lain").show();

        // scroll to table
        $("html, body").animate(
          {
            scrollTop: $("#pertanyaan-lain").offset().top
          },
          500
        );
      })
      .catch(error => {
        const errorMessage = error.response.data[0];
        alert(errorMessage.message);
      });
  }

  render() {
    return (
      <section>
        <div
          className="highlight-blue"
          style={{
            // background: "#1e6add",
            paddingTop: "100px",
            paddingBottom: "100px"
          }}
        >
          <div className="container" style={{ color: "white" }}>
            <div className="intro">
              <h2 className="text-center">Kontak Kami</h2>
              <p className="lead text-center">
                Kami akan secepatnya merespon pertanyaan anda
              </p>
            </div>
          </div>
        </div>

        <div
          className="container"
          style={{
            marginTop: "-60px",
            paddingBottom: "40px"
          }}
        >
          <div className="col-lg-8 offset-lg-2">
            <div className="card card-formulir">
              <form id="formulirKontak" onSubmit={this.submitButton}>
                <div className="card-body">
                  <div className="form-group">
                    <label>Nama</label>
                    <input
                      className="form-control active-input"
                      type="text"
                      name="nama"
                      placeholder="Nama"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Nomor HP</label>
                    <input
                      className="form-control active-input"
                      type="tel"
                      name="no_tlp"
                      required=""
                      placeholder="Contoh: 081288788836"
                    />
                  </div>
                  <div className="form-group">
                    <label>Alamat</label>
                    <input
                      className="form-control active-input"
                      type="text"
                      name="alamat"
                      placeholder="Alamat Lengkap"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <label>Pertanyaan Anda</label>
                    <textarea
                      className="form-control"
                      id="pertanyaan"
                      name="pesan"
                      placeholder="Tuliskan pertanyaan anda disini.."
                      rows="3"
                      required
                    />
                  </div>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-block btn-info">
                    Kirim
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div id="pertanyaan-lain" className="white-bg img-bottom">
          <div className="container">
            <div className="col-lg-8 offset-lg-2">
              <div className="text-center">
                <h3 style={{ marginTop: 20, marginBottom: 20 }}>
                  Terimakasih, kami akan segera menghubungi anda!
                </h3>

                <p className="lead">
                  Ingin mendapatkan respon lebih cepat?, silahkan hubungi kami
                  via WhatsApp, atau baca FAQ yang telah kami buat.
                </p>

                <Link
                  to="/faq"
                  style={{ marginBottom: 50, color: "white" }}
                  role="button"
                  className="btn btn-info"
                >
                  Lihat FAQ
                </Link>

                <button
                  type="button"
                  style={{ marginBottom: 50, marginLeft: 5, color: "white" }}
                  className="btn btn-whatsapp"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <i
                    style={{
                      color: "white",
                      marginRight: 5
                    }}
                    className="fab fa-whatsapp"
                  />
                  Hubungi Kami
                </button>

                <div className="clearfix" />

                <img
                  src={asking}
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
      </section>
    );
  }
}
