// alert('JS loaded');

$(() => {

  $('.house').hover(function() {
    $('body').toggleClass('house-hover');
  });

  $('.beach').hover(function() {
    $('body').toggleClass('beach-hover');
  });

  $('.stud').hover(function() {
    $('body').toggleClass('stud-hover');
  });

});



// $('.house').hover(function() {
//   $('body').fadeTo('slow', 0.3, function() {
//     $('body').toggleClass('house-hover');
//   }).delay(1000).fadeTo('slow', 1);
// });
