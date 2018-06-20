$(document).ready(function () {
    function getListKendaraan() {
        $.ajax({
            type: "GET",
            url: "http://127.0.0.1:3333/api/mobil",
            success: function (response) {
                let options = {
                    data: response,
                    getValue: "nama",
                    list: {
                        match: {
                            enabled: true
                        },
                        onSelectItemEvent: function () {
                            let index = $("#input-mobil").getSelectedItemData().id;
                            $("#id-kendaraan").val(index).trigger("change");
                        }
                    }
                }
                $("#input-mobil").easyAutocomplete(options)
            },
            error: function (response) {
                console.log(response)
                alert("Gagal mendapatkan data dari server!")
            }
        })
    }

    function inputFilter(inputData) {
        if (inputData.tenorPinjaman.length <= 0 || inputData.email.length <= 0 || inputData.ekspetasiPinjaman.length <= 0 || inputData.idKendaraan.length <= 0) {
            swal({
                title: "Maaf!",
                text: "Lengkapi dahulu form anda",
                icon: "warning",
                timer: 1000,
                buttons: false,
            })

            return true
        } else if (inputData.ekspetasiPinjaman < 20000000 || inputData.ekspetasiPinjaman > 1000000000000) {
            swal({
                title: "Maaf!",
                text: "Ekspetasi pinjaman tidak sesuai ketentuan",
                icon: "warning",
                timer: 1000,
                buttons: false,
            });
            return true
        } else if (inputData.nomorHp.length !== 12) {
            swal({
                title: "Maaf!",
                text: "Nomor HP tidak valid",
                icon: "warning",
                timer: 1000,
                buttons: false,
            });
            return true
        } else if (inputData.idKendaraan.length == 0) {
            swal({
                title: "Maaf!",
                text: "Jenis kendaraan anda tidak ditemukan",
                icon: "warning",
                timer: 1000,
                buttons: false,
            });
            return true
        } else {
            return false
        }
    }

    function hitung(inputData) {
        $.ajax({
            type: "POST",
            url: "http://127.0.0.1:3333/api/simulasi/mobil",
            data: inputData,
            beforeSend: function () {
                $("#buttonAjukan").text("Loading ..");
            },
            success: function (response) {
                elementHasil(response)
                $("#buttonAjukan").text("Ajukan lagi");
            },
            error: function (response) {
                alert('Gagal menghitung')
            }
        })
    }

    function elementHasil(response) {
        $("#hasil").html(
            `
            <div class="alert alert-success" style="margin: 20px 0;">
                <h6 class="alert-heading">Kami akan segera menghubungi anda!</h6>
                Terimakasih telah mengajukan pinjaman dana ke kami.
            </div>

            <div class="card">
            <div class="card-header">Hasil Simulasi</div>
            <div class="card-table">
            <table class="table table-hover">
            <tbody>
                <tr>
                    <th>Total Pencairan</th>
                    <td>` + response.total + `</td>
                </tr>
                <tr>
                    <th>Total Angsuran (` + response.tenorPeminjaman + `x)</th>
                    <td>` + response.angsuran + `</td>
                </tr>
            </tbody>
            </table>
            </div>
            </div>
        `
        ).hide().fadeIn()
    }

    // rupiah input
    $('#rupiah').autoNumeric('init')
    $("#rupiah").change(function () {
        $("#ekspetasiPinjaman").val($("#rupiah").autoNumeric("get"));
    });

    // start get list kendaraan untuk input
    getListKendaraan()

    $("#buttonAjukan").click(function (e) {
        e.preventDefault()

        const inputData = {};
        $(".active-input").each(function () {
            inputData[$(this).attr("name")] = $(this).val();
        });

        if (!inputFilter(inputData)) {
            hitung(inputData)
            $('html, body').animate({
                scrollTop: $("#hasil").offset().top
            }, 500);
        }

    })


})