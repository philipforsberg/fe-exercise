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



  $('.menu-image').click(function() {
    $('.menu-image').attr('src', './assets/img/cross.svg');
    $('.menu-box').css('visibility', 'visible');
  });

});
