$(document).ready(function() {
  if ($( '.my-nav' ).width() < 768) {
    $('.my-nav__menu').hide();
    $( '.toggle-button' ).prop( "checked", false );
  }
});

$( window ).resize(function() {
  if ($( '.my-nav' ).width() < 768) {
    $('.my-nav__menu').hide();
    $( '.toggle-button' ).prop( "checked", false );
  } else {
    $('.my-nav__menu').show();
  }
});

$( '.toggle-button' ).on( 'click', function() {
    if( $(this).is(':checked') ){
        // Hacer algo si el checkbox ha sido seleccionado
        $('.my-nav__menu').slideDown('slow');
    } else {
        // Hacer algo si el checkbox ha sido deseleccionado
        $('.my-nav__menu').slideUp('slow');
    }
});
