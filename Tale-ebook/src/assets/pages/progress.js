$(document).ready(function () {
    var valeur = 0;
   // setProgress1(1);
    //setProgress1(2);
});

function setProgress1(value1) {
    $(document).ready(function () {
        $('#progressbar1').css('width', 10 + '%').attr('aria-valuenow', value1);
    });
}

function setProgress2(value2) {
    $(document).ready(function () {
        $('#progressbar2').css('width', value2 + '%').attr('aria-valuenow', value2);
    });
}
