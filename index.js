let panels = $('.panel')
let chapters = $('.chapter')
// console.log(chapters)

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

// $('.left-door').click(function () {
//   if ($('.right-door').hasClass('expanded')) {
//     $('.right-door').removeClass('expanded');
//   }
// })


// $(".sliding-panel").click(function(){
//   if ( $(this).hasClass("isOpen") ) {
//     $(this).animate({
//       width: '10%'
//     });
//   } else {
//     $(this).animate({
//       width: '90%'
//     });
//   }
//   $(this).toggleClass("isOpen");
// });
//
// $(".static-panel").click(function(){
//   if ($(".sliding-panel").hasClass("isOpen")) {
//     // $(".sliding-panel").animate({
//     //   width: '10%'
//     // });
//   }
// });
