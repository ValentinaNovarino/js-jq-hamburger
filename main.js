// Al click sull'icona dell'hamburger menu, deve essere visualizzato il menu mobile e al click sull'icona "X" il menu mobile deve scomparire.

// Aprire il menu dall'hamburger menu cliccando sull'icona

$(".fas.fa-bars").click(function() {
    $(".hamburger-menu").show();
});

// chiudere il menu dell'hamburger menu cliccando sull'icona x
$(".fas.fa-times").click(function() {
    $(".hamburger-menu").hide();
});
