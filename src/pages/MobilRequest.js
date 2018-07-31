import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";
import AutoNumeric from "autonumeric";

window.jQuery = $;
window.$ = $;
require("easy-autocomplete");

export default class MobilRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allMobil: [],
      choosenMobil: null,
      hasilSimulasi: []
    };
  }

  componentDidMount = () => {
    $("#hasilSimulasi").hide();
    new AutoNumeric("#rupiah", { currencySymbol: "Rp." });

    const self = this;
    axios.get("api/mobil").then(response => {
      self.setState({
        allMobil: response.data
      });
    });
  };

  autoCompleteMobil = () => {
    const self = this;
    let listKendaraan = this.state.allMobil;
    let options = {
      data: listKendaraan,
      getValue: "nama",
      list: {
        match: {
          enabled: true
        },
        onClickEvent: () => {
          let index = $("#input-mobil").getSelectedItemData().id;
          self.setState({
            choosenMobil: index
          });
        }
      }
    };

    $("#input-mobil").easyAutocomplete(options);
  };

  submitButton = event => {
    event.preventDefault();

    let rupiah = event.target.ekspetasiPinjaman.value;
    rupiah = rupiah.replace("Rp", "");
    rupiah = rupiah.split(",").join("");
    rupiah = rupiah.replace(".", "");
    rupiah = Number(rupiah);

    const self = this;
    const choosenMobil = this.state.choosenMobil;

    const request = {
      id: choosenMobil,
      pinjaman: rupiah,
      tenor: event.target.tenorPinjaman.value
    };

    axios.post("api/mobil/simulasi", request).then(response => {
      self.setState({
        hasilSimulasi: response.data
      });

      // show table
      $("#hasilSimulasi").show();

      // scroll to table
      $("html, body").animate(
        {
          scrollTop: $("#hasilSimulasi").offset().top
        },
        500
      );
    });
  };

  // future function for dynamic search and fetch mobil
  fetchKendaraan = event => {
    // let listKendaraan = this.state.allMobil;
  };

  render() {
    this.autoCompleteMobil();
    const hasilSimulasi = this.state.hasilSimulasi;

    return (
      <section>
        <div
          className="highlight-blue gedung-wom"
          style={{
            // background: "#1e6add",
            paddingTop: "100px",
            paddingBottom: "100px"
          }}
        >
          <div className="container" style={{ color: "white" }}>
            <div className="intro">
              <h2 className="text-center">Simulasi Mobil</h2>
              <p className="lead text-center">
                Kredit Tanpa Agunan WOM Finance
              </p>
            </div>
          </div>
        </div>

        <div
          className="container"
          style={{ marginTop: "-60px", paddingBottom: "50px" }}
        >
          <div className="col-lg-8 offset-lg-2">
            <div className="card">
              <form onSubmit={this.submitButton}>
                <div className="card-body">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      className="form-control active-input"
                      type="email"
                      name="email"
                      placeholder="Contoh: john@gmail.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Nomor HP</label>
                    <input
                      className="form-control active-input"
                      type="number"
                      name="nomorHp"
                      required=""
                      placeholder="Contoh: 083897613570"
                    />
                    <small className="form-text text-muted">
                      WhatsApp / SMS yang bisa dihubungi
                    </small>
                  </div>

                  <div className="form-group">
                    <label>Alamat</label>
                    <input
                      className="form-control active-input"
                      type="text"
                      required=""
                      placeholder="Alamat Lengkap"
                    />
                  </div>

                  <div className="form-group">
                    <label>Kota</label>
                    <input
                      className="form-control active-input"
                      type="text"
                      required=""
                      placeholder="Contoh: Jakarta"
                    />
                  </div>

                  <div className="form-group">
                    <label>Jenis Kendaraan</label>
                    <input
                      className="form-control active-input"
                      type="text"
                      required=""
                      placeholder="Contoh: HONDA ALL NEW JAZZ IVTEC RS 1.5 AT 2017"
                      autoComplete="off"
                      id="input-mobil"
                    />
                    <small className="form-text text-muted">
                      Merk Jenis & Tahun Keluaran
                    </small>
                  </div>

                  <div className="form-group">
                    <label>Ekspetasi Nominal Pinjaman</label>
                    <input
                      className="form-control active-input"
                      type="text"
                      required=""
                      placeholder="Contoh: 30.000.000"
                      id="rupiah"
                      name="ekspetasiPinjaman"
                    />
                    <small className="form-text text-muted">
                      Minimal Rp20,000,000 sampai maksimal Rp100,000,000,000
                    </small>
                  </div>
                  <div className="form-group">
                    <label>Tenor Pinjaman</label>
                    <select
                      className="form-control active-input"
                      name="tenorPinjaman"
                      defaultValue=""
                      required=""
                    >
                      <option value="">Pilih Tenor Pinjaman</option>
                      <option value="12">1 Tahun</option>
                      <option value="24">2 Tahun</option>
                      <option value="36">3 Tahun</option>
                    </select>
                  </div>
                </div>
                <div className="card-footer">
                  <button
                    type="submit"
                    name=""
                    id=""
                    className="btn btn-primary btn-block"
                  >
                    Hitung & Ajukan
                  </button>
                </div>
              </form>
            </div>

            <div
              id="hasilSimulasi"
              className="card"
              style={{
                marginTop: "20px",
                marginBottom: "20px"
              }}
            >
              {/* <div className="card-header">Hasil Simulasi</div> */}
              <div className="table-responsive">
                <div className="card-body">
                  <div className="alert alert-success" role="alert">
                    <strong>Terimakasih,</strong> kami akan segera menghubungi
                    anda.
                  </div>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Tipe</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Kendaraan</td>
                        <td>{hasilSimulasi.nama}</td>
                      </tr>
                      <tr>
                        <td>Total Pencairan</td>
                        <td>{hasilSimulasi.pencairan}</td>
                      </tr>
                      <tr>
                        <td>Lama Tenor</td>
                        <td>{hasilSimulasi.tenor} bulan</td>
                      </tr>
                      <tr>
                        <td>Cicilan</td>
                        <td>{hasilSimulasi.cicilan}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
