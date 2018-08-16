import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";
import CurrencyFormat from "react-currency-format";

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
    $("#hasilSimulasi").hide();
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
      email: event.target.email.value,
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
          style={{ marginTop: "-60px", paddingBottom: "50px" }}
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
                    <small className="form-text text-muted">
                      WhatsApp / SMS yang bisa dihubungi
                    </small>
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
                    <small className="form-text text-muted">
                      Dapatkan update terbaru mengenai promo, dsb
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
                    <small className="form-text text-muted">
                      Kami membutuhkannya untuk mencari kantor cabang terdekat
                    </small>
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
                    {/* <small className="form-text text-muted">
                      Merk Jenis & Tahun Keluaran
                    </small> */}
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
                          $(".ekspetasiPinjaman").val("Rp5,000,000");
                          $(".ekspetasiPinjaman").attr("disabled", true);
                          $(".isi-manual").show();
                        }}
                      >
                        5.000.000
                      </button>
                      <button
                        type="button"
                        className="btn btn-info btn-sm button-pilihan-harga"
                        onClick={() => {
                          $(".ekspetasiPinjaman").val("Rp7,000,000");
                          $(".ekspetasiPinjaman").attr("disabled", true);
                          $(".isi-manual").show();
                        }}
                      >
                        7.000.000
                      </button>
                      <button
                        type="button"
                        className="btn btn-info btn-sm button-pilihan-harga"
                        onClick={() => {
                          $(".ekspetasiPinjaman").val("Rp10,000,000");
                          $(".ekspetasiPinjaman").attr("disabled", true);
                          $(".isi-manual").show();
                        }}
                      >
                        10.000.000
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
                      <option value="6">6 Bulan</option>
                      <option value="11">11 Bulan</option>
                      <option value="17">17 Bulan</option>
                      <option value="23">23 Bulan</option>
                    </select>
                    <small className="form-text text-muted">
                      Tidak menemukan tenor yang cocok, silahkan kontak kami
                    </small>
                  </div>

                  <div class="alert alert-info" role="alert">
                    <strong>Info</strong>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <ul>
                      <li>Bunga 1.9% perbulan sd 21.09% pertahun</li>
                      <li>Administrasi Rp625.000 - Rp.675.000 </li>
                      <li>Asuransi 2.5% - 4.5% </li>
                    </ul>
                  </div>
                </div>
                <div className="card-footer">
                  <button
                    type="submit"
                    name=""
                    id=""
                    className="btn btn-warning btn-block"
                  >
                    Hitung
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

                  <div class="alert alert-info" role="alert">
                    <strong>Silahkan lihat persyaratannya </strong>
                    <a href="//www.mybpkb.com/index.html#persyaratan">Disini</a>
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
