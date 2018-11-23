import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import CurrencyFormat from "react-currency-format";

// image
import asking from "./../images/asking.svg";

window.jQuery = $;
window.$ = $;
require("easy-autocomplete");
export default class Motor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allMotor: [],
      allKota: [],
      choosenMotor: null,
      choosenKota: null,
      hasilSimulasi: []
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    $("#hasilSimulasi").hide();
    $("#go-persyaratan").hide();
    $(".isi-manual").hide();

    const self = this;

    axios.get("motor").then(response => {
      self.setState({
        allMotor: response.data
      });
    });

    axios.get("kota").then(response => {
      self.setState({
        allKota: response.data
      });
    });
  };

  autoCompleteMotor = () => {
    const self = this;

    const options = {
      data: self.state.allMotor,
      getValue: "nama",
      list: {
        maxNumberOfElements: 10,
        match: {
          enabled: true
        },
        onClickEvent: () => {
          let index = $("#input-motor").getSelectedItemData().id;
          self.setState({
            choosenMotor: index
          });
        }
      }
    };

    $("#input-motor").easyAutocomplete(options);
  };

  autoCompleteKota = () => {
    const self = this;
    const options = {
      data: self.state.allKota,
      getValue: "name",
      list: {
        match: {
          enabled: true
        },
        onClickEvent: () => {
          let index = $("#input-kota").getSelectedItemData().id;
          self.setState({
            choosenKota: index
          });
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
    const choosenMotor = this.state.choosenMotor;
    const choosenKota = this.state.choosenKota;

    const request = {
      id: choosenMotor,
      nama: event.target.nama.value,
      no_tlp: event.target.no_tlp.value,
      alamat: event.target.alamat.value,
      kota: choosenKota,
      pinjaman: rupiah,
      tenor: event.target.tenorPinjaman.value
    };

    axios
      .post("simulasi/motor", request)
      .then(response => {
        self.setState({
          hasilSimulasi: response.data
        });

        // show table
        $("#hasilSimulasi").show();
        $("#go-persyaratan").show();

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

  // future function for dynamic search and fetch motor
  fetchKendaraan = event => {
    // let listKendaraan = this.state.allMotor;
  };

  render() {
    this.autoCompleteMotor();
    this.autoCompleteKota();
    const hasilSimulasi = this.state.hasilSimulasi;
    return (
      <section>
        <div
          className="highlight-blue"
          style={{
            paddingTop: "100px",
            paddingBottom: "100px"
          }}
        >
          <div className="container" style={{ color: "white" }}>
            <div className="intro">
              <h2 className="text-center">Simulasi Motor</h2>
              <p className="lead text-center">
                Pinjaman Jaminan BPKB Motor Wom Finance
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
                    <label>Nomor HP</label>
                    <input
                      className="form-control active-input"
                      type="number"
                      name="no_tlp"
                      required=""
                      placeholder="Contoh: 081288788836"
                    />
                    {/* <small className="form-text text-muted">
                      WhatsApp / SMS yang bisa dihubungi
                    </small> */}
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
                    {/* <small className="form-text text-muted">
                      Kami membutuhkannya untuk mencari kantor cabang terdekat
                    </small> */}
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
                    <label>Jenis Kendaraan</label>
                    <input
                      className="form-control active-input"
                      type="text"
                      placeholder="Contoh: SUZUKI SATRIA FU 150 SCD 2016"
                      autoComplete="off"
                      id="input-motor"
                      required=""
                    />
                    <small className="form-text text-muted">
                      Tidak menemukan kendaraan anda?, silahkan
                      <a href="https://wa.me/6281385689789?text=Halo%20kak..%20Saya%20ingin%20mengetahui%20simulasi%20pencairan%20kendaraan%20saya%20sebagai%20berikut%20%3A%0A%0ANama%20%3A%0AAlamat%20%3A%0AKota%20%3A%0ANo%20Hp%20%3A%0AMerk%2C%20type%20%26%20tahun%20kendaraan%20%3A%0A%0ATerima%20kasih.">
                        hubungi kami
                      </a>
                    </small>
                  </div>
                  <div className="form-group">
                    <label>Nominal Pinjaman</label>
                    <CurrencyFormat
                      name="ekspetasiPinjaman"
                      className="form-control active-input ekspetasiPinjaman"
                      placeholder="Jumlah Pinjaman"
                      thousandSeparator={true}
                      prefix={"Rp"}
                      autoComplete="off"
                    />
                    <small className="form-text text-muted">
                      <button
                        type="button"
                        className="btn btn-warning btn-sm button-pilihan-harga"
                        onClick={() => {
                          $(".ekspetasiPinjaman").val("Pencairan maksimal");
                          $(".ekspetasiPinjaman").attr("disabled", true);
                          $(".isi-manual").show();
                        }}
                      >
                        Pinjaman Maksimal
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm button-pilihan-harga isi-manual"
                        onClick={() => {
                          $(".ekspetasiPinjaman").val("");
                          $(".ekspetasiPinjaman").attr("disabled", false);
                          $(".ekspetasiPinjaman").focus();
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
                      <option value="6">6 Bulan</option>
                      <option value="11">11 Bulan</option>
                      <option value="17">17 Bulan</option>
                      <option value="23">23 Bulan</option>
                    </select>
                    <small className="form-text text-muted">
                      Tidak menemukan tenor yang cocok?, silahkan
                      <a href="https://wa.me/6281385689789?text=Halo%20kak..%20Saya%20ingin%20mengetahui%20simulasi%20pencairan%20kendaraan%20saya%20sebagai%20berikut%20%3A%0A%0ANama%20%3A%0AAlamat%20%3A%0AKota%20%3A%0ANo%20Hp%20%3A%0AMerk%2C%20type%20%26%20tahun%20kendaraan%20%3A%0A%0ATerima%20kasih.">
                        hubungi kami
                      </a>
                    </small>
                  </div>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-warning btn-block">
                    Hitung
                  </button>
                </div>
              </form>
            </div>

            <div
              id="hasilSimulasi"
              className="card card-formulir"
              style={{
                marginTop: "20px"
              }}
            >
              <div className="table-responsive">
                <div className="card-body">
                  <h5 className="card-title">Hasil Simulasi</h5>
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

        <div id="go-persyaratan" className="white-bg img-bottom">
          <div className="container">
            <div className="col-lg-8 offset-lg-2">
              <div className="text-center">
                <h3 style={{ marginTop: 20, marginBottom: 20 }}>
                  Masih punya pertanyaan?
                </h3>

                <p className="lead">
                  Kami akan segera menghubungi anda dalam waktu dekat.
                </p>

                <Link
                  to="/faq"
                  style={{ marginBottom: 50, color: "white" }}
                  role="button"
                  className="btn btn-info"
                >
                  Lihat FAQ
                </Link>

                <a
                  href="https://wa.me/6281284168409?text=Halo%20kak..%20Saya%20ingin%20mengetahui%20simulasi%20pencairan%20kendaraan%20saya%20sebagai%20berikut%20%3A%0A%0ANama%20%3A%0AAlamat%20%3A%0AKota%20%3A%0ANo%20Hp%20%3A%0AMerk%2C%20type%20%26%20tahun%20kendaraan%20%3A%0A%0ATerima%20kasih."
                  style={{ marginBottom: 50, marginLeft: 5, color: "white" }}
                  role="button"
                  className="btn btn-whatsapp"
                >
                  <i
                    className="fab fa-whatsapp"
                    style={{
                      color: "white",
                      marginRight: 5
                    }}
                  />
                  Hubungi Kami
                </a>

                <div className="clearfix" />

                <img
                  src={asking}
                  alt="pelajari"
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
