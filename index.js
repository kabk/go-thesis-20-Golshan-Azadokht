let dots = $('.dot');

$(".chapter").click(function () {
    let num = $(this)[0].classList.value;

    num = parseInt(num.match(/(\d+)/)[0]);

      $('.right-door').toggleClass('expanded');
      $('.panel').css( "display", "none" );
      $('.panel' + num).css( "display", "block" );
})

$('.right-door').click(function () {
  $(this).removeClass('expanded');
})

  dots.click( function () {
    if ($('.right-door').hasClass('expanded')){
    $('.right-door').removeClass('expanded');
  }
})
