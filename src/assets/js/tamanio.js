$(window).resize(function() {
    if ($(window).width() < 769) {
        $('#contenidoAbout').removeClass("col-6");
        $('#contenidoAbout').addClass("col-12");
    } else {
        $('#contenidoAbout').removeClass("col-12");
        $('#contenidoAbout').addClass("col-6");
    }

    /*  if ($(window).width() < 769) {
         $('#contenidoPersonaje').removeClass("col-6");
         $('#contenidoPersonaje').addClass("col-12");
         $('#contenidoPersonajeFoto').removeClass("col-6");
         $('#contenidoPersonajeFoto').addClass("col-12");
     } else {
         $('#contenidoPersonaje').removeClass("col-6");
         $('#contenidoPersonaje').addClass("col-12");
         $('#contenidoPersonajeFoto').removeClass("col-12");
         $('#contenidoPersonajeFoto').addClass("col-6");
     } */

});