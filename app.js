$(document).ready(function () {

    $.router.add('/', function () {
        $("#content").load('/pages/home.html');
    });

    $.router.add('/simulasi', function (data) {
        $("#content").load('/pages/simulasi.html');
    });

    $.router.go('/', 'Home');

    $("#goSimulasi").click(function (e) {
        e.preventDefault();
        $.router.go('/simulasi', 'Simulasi');
    });

    $("#goHome").click(function (e) {
        e.preventDefault();
        $.router.go('/', 'Home');
    });

    $.router.addErrorHandler(function (url) {
        alert('Sorry sir, we cannot found your address!' + url);
    });

});