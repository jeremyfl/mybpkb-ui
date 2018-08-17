import React, { Component } from "react";
// persyaratan
import ktp from "../../images/ktp.svg";
import slip_gaji from "../../images/slip_gaji.svg";
import rek_listrik from "../../images/rek_listrik.svg";
import stnk_bpkb from "../../images/stnk_bpkb.svg";
import rek_tabungan from "../../images/rek_tabungan.svg";
import npwp from "../../images/npwp.svg";

export default class Persyaratan extends Component {
  render() {
    return (
      <section>
        <div id="persyaratan">
          <div className="container">
            <div className="col-lg-8 offset-lg-2">
              <div className="text-center">
                <h3 style={{ marginTop: 20, marginBottom: 20 }}>
                  Apa saja persyaratannya?
                </h3>
                <p className="lead">
                  Anda hanya perlu menyiapkan beberapa dokumen dibawah dan
                  dapatkan dana secepatnya.
                </p>

                <div className="ilustration">
                  <div class="row">
                    <div class="col-4">
                      <img src={ktp} alt="" />
                      <h4>KTP Aktif</h4>
                    </div>
                    <div class="col-4">
                      <img src={slip_gaji} alt="" />
                      <h4>Slip Gaji</h4>
                    </div>
                    <div class="col-4">
                      <img src={rek_tabungan} alt="" />
                      <h4>
                        Rekening Tabungan <small>(Khusus Mobil)</small>
                      </h4>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-4">
                      <img src={rek_listrik} alt="" />
                      <h4>Rekening Listrik</h4>
                    </div>
                    <div class="col-4">
                      <img src={stnk_bpkb} alt="" />
                      <h4>STNK BPKB</h4>
                    </div>
                    <div class="col-4">
                      <img src={npwp} alt="" />
                      <h4>
                        NPWP <small>(Khusus Mobil)</small>
                      </h4>
                    </div>
                  </div>
                </div>

                <p className="lead">Semua persyaratan terpenuhi?</p>
                <a
                  className="btn btn-warning btn-lg"
                  href="#pilih-simulasi"
                  role="button"
                >
                  Ajukan Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
