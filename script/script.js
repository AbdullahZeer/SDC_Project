$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
    $(".nav-style").addClass("nav-shadow");
  } else {
    $(".nav-style").removeClass("nav-shadow");
  }
});

$(document).ready(function() {
  $('a[href^="#"]').click(function() {
    var hash = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800);
    return false;
  });
});

$(document).ready(function(){

  $(".animate-box").waypoint(function() {

      $(this).removeClass(".non-display")
      $(this).addClass('fadeIn')
  });
});
