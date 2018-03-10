import preloader from "./preloader.js"
import social from "./social"

export default function preloader(){


$( document ).ready(function() {

    $(".preloader").delay(7000).fadeOut("slow")
    
    });

}

function social(){



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
}

export * from social() 
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJwcmVsb2FkZXIuanMiLCJzb2NpYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYWxleHdhdHRvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByZWxvYWRlciBmcm9tIFwiLi9wcmVsb2FkZXIuanNcIlxuaW1wb3J0IHNvY2lhbCBmcm9tIFwiLi9zb2NpYWxcIlxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlbG9hZGVyKCl7XG5cblxuJCggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpIHtcblxuICAgICQoXCIucHJlbG9hZGVyXCIpLmRlbGF5KDcwMDApLmZhZGVPdXQoXCJzbG93XCIpXG4gICAgXG4gICAgfSk7XG5cbn1cbiIsImZ1bmN0aW9uIHNvY2lhbCgpe1xuXG5cblxuJCggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpIHtcbiAgJCgnaScpLmhpZGUoKTtcbn0pXG5cbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICQoJ2knKS5zaG93KCk7XG5cbiAgdmFyIGZhY2ViUG9zID0gJCgnI2ZhY2Vib29rJykucG9zaXRpb24oKTtcbiAgdmFyIHR3aXR0ZXJQb3MgPSAkKCcjdHdpdHRlcicpLnBvc2l0aW9uKCk7XG4gIHZhciBnaXRodWJQb3MgPSAkKCcjZ2l0aHViJykucG9zaXRpb24oKTtcbiAgdmFyIHN0YWNrUG9zID0gJCgnI3N0YWNrJykucG9zaXRpb24oKTtcbiAgdmFyIGxpbmtlZGluUG9zID0gJCgnI2xpbmtlZGluJykucG9zaXRpb24oKTtcbiAgdmFyIGNvZGVQb3MgPSAkKCcjY29kZScpLnBvc2l0aW9uKCk7XG4gIHZhciBpbWdQb3MgPSAkKCcuQXBwLWxvZ28nKS5wb3NpdGlvbigpO1xuICBcbiAgJCgnaScpLmNzcyh7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgekluZGV4OiAnMScsXG4gICAgdG9wOiBpbWdQb3MudG9wICsgMTEwLFxuICAgIGxlZnQ6ICc0NyUnXG4gIH0pO1xuICBcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAkKCcjZmFjZWJvb2snKS5hbmltYXRlKHtcbiAgICAgIHRvcDogZmFjZWJQb3MudG9wICsgMTAsXG4gICAgICBsZWZ0OiBmYWNlYlBvcy5sZWZ0IC0gMTBcbiAgICB9LCA1MDApO1xuICB9LCAyNTApO1xuICBcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAkKCcjZmFjZWJvb2snKS5hbmltYXRlKHtcbiAgICAgIHRvcDogZmFjZWJQb3MudG9wLFxuICAgICAgbGVmdDogZmFjZWJQb3MubGVmdFxuICAgIH0sIDI1MCk7XG4gICAgXG4gICAgJCgnI3R3aXR0ZXInKS5hbmltYXRlKHtcbiAgICAgIHRvcDogdHdpdHRlclBvcy50b3AgKyAxMCxcbiAgICAgIGxlZnQ6IHR3aXR0ZXJQb3MubGVmdCAtIDZcbiAgICB9LCA1MDApO1xuICB9LCA1MDApO1xuICBcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAkKCcjdHdpdHRlcicpLmFuaW1hdGUoe1xuICAgICAgdG9wOiB0d2l0dGVyUG9zLnRvcCxcbiAgICAgIGxlZnQ6IHR3aXR0ZXJQb3MubGVmdFxuICAgIH0sIDI1MCk7XG4gICAgXG4gICAgJCgnI2dpdGh1YicpLmFuaW1hdGUoe1xuICAgICAgdG9wOiBnaXRodWJQb3MudG9wICsgMTAsXG4gICAgICBsZWZ0OiBnaXRodWJQb3MubGVmdCAtIDNcbiAgICB9LCA1MDApO1xuICB9LCA3NTApO1xuICBcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAkKCcjZ2l0aHViJykuYW5pbWF0ZSh7XG4gICAgICB0b3A6IGdpdGh1YlBvcy50b3AsXG4gICAgICBsZWZ0OiBnaXRodWJQb3MubGVmdFxuICAgIH0sIDI1MCk7XG4gICAgXG4gICAgJCgnI3N0YWNrJykuYW5pbWF0ZSh7XG4gICAgICB0b3A6IHN0YWNrUG9zLnRvcCArIDEwLFxuICAgICAgbGVmdDogc3RhY2tQb3MubGVmdFxuICAgIH0sIDUwMCk7XG4gIH0sIDEwMDApO1xuICBcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAkKCcjc3RhY2snKS5hbmltYXRlKHtcbiAgICAgIHRvcDogc3RhY2tQb3MudG9wLFxuICAgICAgbGVmdDogc3RhY2tQb3MubGVmdFxuICAgIH0sIDI1MCk7XG4gICAgXG4gICAgJCgnI2xpbmtlZGluJykuYW5pbWF0ZSh7XG4gICAgICB0b3A6IGxpbmtlZGluUG9zLnRvcCArIDEwLFxuICAgICAgbGVmdDogbGlua2VkaW5Qb3MubGVmdCArIDNcbiAgICB9LCA1MDApO1xuICB9LCAxMjUwKTtcbiAgXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgJCgnI2xpbmtlZGluJykuYW5pbWF0ZSh7XG4gICAgICB0b3A6IGxpbmtlZGluUG9zLnRvcCxcbiAgICAgIGxlZnQ6IGxpbmtlZGluUG9zLmxlZnRcbiAgICB9LCAyNTApO1xuICAgIFxuICAgICQoJyNjb2RlJykuYW5pbWF0ZSh7XG4gICAgICB0b3A6IGNvZGVQb3MudG9wICsgMTAsXG4gICAgICBsZWZ0OiBjb2RlUG9zLmxlZnQgKyAxMFxuICAgIH0sIDUwMCk7XG4gIH0sIDE3NTApO1xuICBcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAkKCcjY29kZScpLmFuaW1hdGUoe1xuICAgICAgdG9wOiBjb2RlUG9zLnRvcCxcbiAgICAgIGxlZnQ6IGNvZGVQb3MubGVmdFxuICAgIH0sIDI1MCk7XG4gIH0sIDIwMDApO1xuICBcbn0sIDc1MDApXG59KVxufVxuXG5leHBvcnQgKiBmcm9tIHNvY2lhbCgpICJdfQ==
