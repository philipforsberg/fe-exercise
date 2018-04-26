// alert('JS loaded');

$(() => {

  $('.house').hover(function() {
    $('body').toggleClass('house-hover');
  });

});


// $('.house').mouseover(function() {
//   $('body').css('background-image', 'url(./assets/img/placeholder-01.jpg)');
// }).mouseout(function() {
//   $('body').css('background-image', 'none');
// });


// $(".result").hover(
//   function () {
//     $(this).addClass("result_hover");
//   },
//   function () {
//     $(this).removeClass("result_hover");
//   }
// );
