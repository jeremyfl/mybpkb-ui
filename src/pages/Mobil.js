import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";
import CurrencyFormat from "react-currency-format";

window.jQuery = $;
window.$ = $;
require("easy-autocomplete");

export default class MobilRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allMobil: [],
      allKota: [],
      choosenMobil: null,
      hasilSimulasi: []
    };
  }

  componentDidMount = () => {
    $("#hasilSimulasi").hide();
    $(".isi-manual").hide();

    const self = this;

    axios.get("mobil").then(response => {
      self.setState({
        allMobil: response.data
      });
    });

    axios.get("kota").then(response => {
      self.setState({
        allKota: response.data
      });
    });
  };

  autoCompleteMobil = () => {
    const self = this;

    const options = {
      data: self.state.allMobil,
      getValue: "nama",
      list: {
        maxNumberOfElements: 10,
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

  autoCompleteKota = () => {
    const self = this;
    const options = {
      data: self.state.allKota,
      getValue: "nama",
      list: {
        match: {
          enabled: true
        }
      }
    };

    $("#input-kota").easyAutocomplete(options);
  };

  submitButton = event => {
    event.preventDefault();

    // rupiah means ekspetasi pinjaman, but it depens, if it max request it should be not rupiah
    let rupiah = event.target.ekspetasiPinjaman.value;

    if (rupiah === "Pencairan maksimal") {
      rupiah = "max";
    } else {
      rupiah = rupiah.replace("Rp", "");
      rupiah = rupiah.split(",").join("");
      rupiah = rupiah.replace(".", "");
      rupiah = Number(rupiah);
    }

    const self = this;
    const choosenMobil = this.state.choosenMobil;

    const request = {
      id: choosenMobil,
      nama: event.target.nama.value,
      no_tlp: event.target.no_tlp.value,
      email: event.target.email.value,
      alamat: event.target.alamat.value,
      kota: event.target.kota.value,
      pinjaman: rupiah,
      tenor: event.target.tenorPinjaman.value
    };

    axios
      .post("simulasi/mobil", request)
      .then(response => {
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
      })
      .catch(error => {
        const errorMessage = error.response.data[0];
        alert(errorMessage.message);
      });
  };

  // future function for dynamic search and fetch mobil
  fetchKendaraan = event => {
    // let listKendaraan = this.state.allMobil;
  };

  render() {
    this.autoCompleteMobil();
    this.autoCompleteKota();
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
                Pinjaman Jaminan BPKB Mobil Wom Finance
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
                    <label>Nama</label>
                    <input
                      className="form-control active-input"
                      type="text"
                      name="nama"
                      placeholder="Nama Lengkap"
                      required
                    />
                  </div>
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
                      name="no_tlp"
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
                      name="alamat"
                      placeholder="Alamat Lengkap"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <label>Kota</label>
                    <input
                      className="form-control active-input"
                      type="text"
                      name="kota"
                      id="input-kota"
                      autoComplete="off"
                      placeholder="Contoh: Jakarta"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <label>Jenis Kendaraan</label>
                    <input
                      className="form-control active-input"
                      type="text"
                      placeholder="Contoh: HONDA ALL NEW JAZZ IVTEC RS 1.5 AT 2017"
                      autoComplete="off"
                      id="input-mobil"
                      required=""
                    />
                    <small className="form-text text-muted">
                      Merk Jenis & Tahun Keluaran
                    </small>
                  </div>
                  <div className="form-group">
                    <label>Ekspetasi Nominal Pinjaman</label>
                    <CurrencyFormat
                      name="ekspetasiPinjaman"
                      className="form-control active-input ekspetasiPinjaman"
                      placeholder="Jumlah Ekspetasi Pinjaman"
                      thousandSeparator={true}
                      prefix={"Rp"}
                      autoComplete="off"
                    />
                    <small className="form-text text-muted">
                      <button
                        type="button"
                        className="btn btn-info btn-sm button-pilihan-harga"
                        onClick={() => {
                          $(".ekspetasiPinjaman").val("Rp30,000,000");
                          $(".ekspetasiPinjaman").attr("disabled", true);
                          $(".isi-manual").show();
                        }}
                      >
                        30.000.000
                      </button>
                      <button
                        type="button"
                        className="btn btn-info btn-sm button-pilihan-harga"
                        onClick={() => {
                          $(".ekspetasiPinjaman").val("Rp50,000,000");
                          $(".ekspetasiPinjaman").attr("disabled", true);
                          $(".isi-manual").show();
                        }}
                      >
                        50.000.000
                      </button>
                      <button
                        type="button"
                        className="btn btn-info btn-sm button-pilihan-harga"
                        onClick={() => {
                          $(".ekspetasiPinjaman").val("Rp100,000,000");
                          $(".ekspetasiPinjaman").attr("disabled", true);
                          $(".isi-manual").show();
                        }}
                      >
                        100.000.000
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning btn-sm button-pilihan-harga"
                        onClick={() => {
                          $(".ekspetasiPinjaman").val("Pencairan maksimal");
                          $(".ekspetasiPinjaman").attr("disabled", true);
                          $(".isi-manual").show();
                        }}
                      >
                        Pencairan Maksimal
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm button-pilihan-harga isi-manual"
                        onClick={() => {
                          $(".ekspetasiPinjaman").val("");
                          $(".ekspetasiPinjaman").attr("disabled", false);
                          $(".isi-manual").hide();
                        }}
                      >
                        Isi Manual
                      </button>
                      {/* Minimal Rp20,000,000 sampai maksimal Rp100,000,000,000 */}
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
