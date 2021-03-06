$( document ).ready(function() {
  $('i').hide();
});

$(window).on('load', function() {

  setTimeout(function() {
  $('i').show();

  var facebPos = $('#facebook').position();
  var twitterPos = $('#twitter').position();
  var githubPos = $('#github').position();
  var linkedinPos = $('#linkedin').position();
  var imgPos = $('.App-logo').position();
  
  $('i').css({
    position: 'absolute',
    zIndex: '1',
    top: imgPos.top + 110,
    left: '47%'
  });
  
  setTimeout(function() {
    $('#facebook').animate({
      top: facebPos.top + 10,
      left: facebPos.left - 10
    }, 500);
  }, 250);
  
  setTimeout(function() {
    $('#facebook').animate({
      top: facebPos.top,
      left: facebPos.left
    }, 250);
    
    $('#twitter').animate({
      top: twitterPos.top + 10,
      left: twitterPos.left - 6
    }, 500);
  }, 500);
  
  setTimeout(function() {
    $('#twitter').animate({
      top: twitterPos.top,
      left: twitterPos.left
    }, 250);
    
    $('#github').animate({
      top: githubPos.top + 10,
      left: githubPos.left - 3
    }, 500);
  }, 750);
  
  setTimeout(function() {
    $('#github').animate({
      top: githubPos.top,
      left: githubPos.left
    }, 250);
    
    $('#linkedin').animate({
      top: linkedinPos.top + 10,
      left: linkedinPos.left
    }, 500);
  }, 1000);
  
  setTimeout(function() {
    $('#linkedin').animate({
      top: linkedinPos.top,
      left: linkedinPos.left
    }, 250);
  }, 1100);
  
}, 7250);
});