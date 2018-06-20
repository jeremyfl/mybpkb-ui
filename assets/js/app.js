$(document).ready(function () {
    function hitung(inputData) {
        $.ajax({
            type: "POST",
            url: "http://127.0.0.1:3333/api/simulasi/mobil",
            data: inputData,
            success: function (response) {
                console.log(response)
                elementHasil(response)
            },
            error: function (response) {
                alert('Gagal menghitung')
            }
        })
    }

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
            error: function () {
                alert("Gagal mendapatkan data dari server!")
            }
        })
    }

    function elementHasil(response) {
        $(`
            <div class="card" style="margin: 20px 0;">
            <div class="card-header">Hasil Simulasi</div>
            <div class="card-table">
            <table class="table">
            <tbody>
                <tr>
                    <th>Total Pencairan</th>
                    <td>` + response.total + `</td>
                </tr>
                <tr>
                    <th>Total Angsuran</th>
                    <td>` + response.angsuran + `</td>
                </tr>
            </tbody>
            </table>
            </div>
            </div>
        `).appendTo("#hasil").hide().fadeIn()
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

        if (inputData.idKendaraan.length == 0) {
            alert("Maaf, jenis kendaraan anda tidak ada dalam database kami")
        } 
        else {
            hitung(inputData)
        }

    })


})