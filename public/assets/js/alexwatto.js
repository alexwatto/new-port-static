$( document ).ready(function() {

    $(".preloader").delay(7000).fadeOut("slow")
    
    });

$( document ).ready(function() {
  $('i').hide();
})

$(window).on('load', function() {

  setTimeout(function() {
  $('i').show();

  var facebPos = $('#facebook').position();
  var twitterPos = $('#twitter').position();
  var githubPos = $('#github').position();
  var stackPos = $('#stack').position();
  var linkedinPos = $('#linkedin').position();
  var codePos = $('#code').position();
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
    
    $('#stack').animate({
      top: stackPos.top + 10,
      left: stackPos.left
    }, 500);
  }, 1000);
  
  setTimeout(function() {
    $('#stack').animate({
      top: stackPos.top,
      left: stackPos.left
    }, 250);
    
    $('#linkedin').animate({
      top: linkedinPos.top + 10,
      left: linkedinPos.left + 3
    }, 500);
  }, 1250);
  
  setTimeout(function() {
    $('#linkedin').animate({
      top: linkedinPos.top,
      left: linkedinPos.left
    }, 250);
    
    $('#code').animate({
      top: codePos.top + 10,
      left: codePos.left + 10
    }, 500);
  }, 1750);
  
  setTimeout(function() {
    $('#code').animate({
      top: codePos.top,
      left: codePos.left
    }, 250);
  }, 2000);
  
}, 7500)
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWxvYWRlci5qcyIsInNvY2lhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhbGV4d2F0dG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICAgJChcIi5wcmVsb2FkZXJcIikuZGVsYXkoNzAwMCkuZmFkZU91dChcInNsb3dcIilcbiAgICBcbiAgICB9KTtcbiIsIiQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICQoJ2knKS5oaWRlKCk7XG59KVxuXG4kKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAkKCdpJykuc2hvdygpO1xuXG4gIHZhciBmYWNlYlBvcyA9ICQoJyNmYWNlYm9vaycpLnBvc2l0aW9uKCk7XG4gIHZhciB0d2l0dGVyUG9zID0gJCgnI3R3aXR0ZXInKS5wb3NpdGlvbigpO1xuICB2YXIgZ2l0aHViUG9zID0gJCgnI2dpdGh1YicpLnBvc2l0aW9uKCk7XG4gIHZhciBzdGFja1BvcyA9ICQoJyNzdGFjaycpLnBvc2l0aW9uKCk7XG4gIHZhciBsaW5rZWRpblBvcyA9ICQoJyNsaW5rZWRpbicpLnBvc2l0aW9uKCk7XG4gIHZhciBjb2RlUG9zID0gJCgnI2NvZGUnKS5wb3NpdGlvbigpO1xuICB2YXIgaW1nUG9zID0gJCgnLkFwcC1sb2dvJykucG9zaXRpb24oKTtcbiAgXG4gICQoJ2knKS5jc3Moe1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHpJbmRleDogJzEnLFxuICAgIHRvcDogaW1nUG9zLnRvcCArIDExMCxcbiAgICBsZWZ0OiAnNDclJ1xuICB9KTtcbiAgXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgJCgnI2ZhY2Vib29rJykuYW5pbWF0ZSh7XG4gICAgICB0b3A6IGZhY2ViUG9zLnRvcCArIDEwLFxuICAgICAgbGVmdDogZmFjZWJQb3MubGVmdCAtIDEwXG4gICAgfSwgNTAwKTtcbiAgfSwgMjUwKTtcbiAgXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgJCgnI2ZhY2Vib29rJykuYW5pbWF0ZSh7XG4gICAgICB0b3A6IGZhY2ViUG9zLnRvcCxcbiAgICAgIGxlZnQ6IGZhY2ViUG9zLmxlZnRcbiAgICB9LCAyNTApO1xuICAgIFxuICAgICQoJyN0d2l0dGVyJykuYW5pbWF0ZSh7XG4gICAgICB0b3A6IHR3aXR0ZXJQb3MudG9wICsgMTAsXG4gICAgICBsZWZ0OiB0d2l0dGVyUG9zLmxlZnQgLSA2XG4gICAgfSwgNTAwKTtcbiAgfSwgNTAwKTtcbiAgXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgJCgnI3R3aXR0ZXInKS5hbmltYXRlKHtcbiAgICAgIHRvcDogdHdpdHRlclBvcy50b3AsXG4gICAgICBsZWZ0OiB0d2l0dGVyUG9zLmxlZnRcbiAgICB9LCAyNTApO1xuICAgIFxuICAgICQoJyNnaXRodWInKS5hbmltYXRlKHtcbiAgICAgIHRvcDogZ2l0aHViUG9zLnRvcCArIDEwLFxuICAgICAgbGVmdDogZ2l0aHViUG9zLmxlZnQgLSAzXG4gICAgfSwgNTAwKTtcbiAgfSwgNzUwKTtcbiAgXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgJCgnI2dpdGh1YicpLmFuaW1hdGUoe1xuICAgICAgdG9wOiBnaXRodWJQb3MudG9wLFxuICAgICAgbGVmdDogZ2l0aHViUG9zLmxlZnRcbiAgICB9LCAyNTApO1xuICAgIFxuICAgICQoJyNzdGFjaycpLmFuaW1hdGUoe1xuICAgICAgdG9wOiBzdGFja1Bvcy50b3AgKyAxMCxcbiAgICAgIGxlZnQ6IHN0YWNrUG9zLmxlZnRcbiAgICB9LCA1MDApO1xuICB9LCAxMDAwKTtcbiAgXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgJCgnI3N0YWNrJykuYW5pbWF0ZSh7XG4gICAgICB0b3A6IHN0YWNrUG9zLnRvcCxcbiAgICAgIGxlZnQ6IHN0YWNrUG9zLmxlZnRcbiAgICB9LCAyNTApO1xuICAgIFxuICAgICQoJyNsaW5rZWRpbicpLmFuaW1hdGUoe1xuICAgICAgdG9wOiBsaW5rZWRpblBvcy50b3AgKyAxMCxcbiAgICAgIGxlZnQ6IGxpbmtlZGluUG9zLmxlZnQgKyAzXG4gICAgfSwgNTAwKTtcbiAgfSwgMTI1MCk7XG4gIFxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICQoJyNsaW5rZWRpbicpLmFuaW1hdGUoe1xuICAgICAgdG9wOiBsaW5rZWRpblBvcy50b3AsXG4gICAgICBsZWZ0OiBsaW5rZWRpblBvcy5sZWZ0XG4gICAgfSwgMjUwKTtcbiAgICBcbiAgICAkKCcjY29kZScpLmFuaW1hdGUoe1xuICAgICAgdG9wOiBjb2RlUG9zLnRvcCArIDEwLFxuICAgICAgbGVmdDogY29kZVBvcy5sZWZ0ICsgMTBcbiAgICB9LCA1MDApO1xuICB9LCAxNzUwKTtcbiAgXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgJCgnI2NvZGUnKS5hbmltYXRlKHtcbiAgICAgIHRvcDogY29kZVBvcy50b3AsXG4gICAgICBsZWZ0OiBjb2RlUG9zLmxlZnRcbiAgICB9LCAyNTApO1xuICB9LCAyMDAwKTtcbiAgXG59LCA3NTAwKVxufSkiXX0=
