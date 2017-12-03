
$clicked = false;
$('#circle-container').hide();
            $('#circle-one').animate(
            {'foo':50},
            {
                step: function(foo){
                     $(this).attr('cy', foo);
                },
                duration: 1
            }
          );
          $('#circle-two').animate(
            {'foo':50},
            {
                step: function(foo){
                     $(this).attr('cy', foo);
                },
                duration: 1
            }
          );
          $('#circle-three').animate(
            {'foo':50},
            {
                step: function(foo){
                     $(this).attr('cy', foo);
                },
                duration: 1
            }
          );
          $('#circle-four').animate(
            {'foo':50},
            {
                step: function(foo){
                     $(this).attr('cy', foo);
                },
                duration: 1
            }
          );

$(document).ready(function() {
  $('#circle-container').show();
  $('#menu-trigger, #hamburger').on('click', clickIt);
    function clickIt() {
          if($clicked==false){
          //HAMBURGER
            $('#line-one').addClass('.line-one');
            
          //KLAP UIT
          $('#circle-one').stop().animate(
            {'foo':140},
            {
                step: function(foo){
                     $(this).attr('cy', foo);
                },
                duration: 1000
            }
          );
          $('#circle-two').stop().animate(
            {'foo':215},
            {
                step: function(foo){
                     $(this).attr('cy', foo);
                },
                duration: 1000
            }
          );
          $('#circle-three').stop().animate(
            {'foo':290},
            {
                step: function(foo){
                     $(this).attr('cy', foo);
                },
                duration: 1000
            }
          );
          $('#circle-four').stop().animate(
            {'foo':365},
            {
                step: function(foo){
                     $(this).attr('cy', foo);
                },
                duration: 1000
            }
          );
          $clicked = true; 
          $('svg#circles a').stop().delay(600).fadeIn(800);
        }else{
           $('#circle-one').stop().animate(
            {'foo':50},
            {
                step: function(foo){
                     $(this).attr('cy', foo);
                },
                duration: 1100
            }
          );
          $('#circle-two').stop().animate(
            {'foo':50},
            {
                step: function(foo){
                     $(this).attr('cy', foo);
                },
                duration: 1100
            }
          );
          $('#circle-three').stop().animate(
            {'foo':50},
            {
                step: function(foo){
                     $(this).attr('cy', foo);
                },
                duration: 1100
            }
          );
          $('#circle-four').stop().animate(
            {'foo':50},
            {
                step: function(foo){
                     $(this).attr('cy', foo);
                },
                duration: 1100
            }
          );
          $clicked = false;  
          $('svg#circles a').stop().fadeOut(800);
        }
        
    }
});

$('#circle-one, #text-one').click(function(event) {
    event.preventDefault();
    $('html, body').stop().animate({
        scrollTop: '0px'
    }, 2500, 'easeInOutCubic');
});
$('#circle-two, #text-two').click(function(event) {
    event.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $("#about").offset().top
    }, 2500, 'easeInOutCubic');
});
$('#circle-three, #text-three').click(function(event) {
    event.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $("#work").offset().top
    }, 2500, 'easeInOutCubic');
});
$('#circle-four, #text-four').click(function(event) {
    event.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $("#cv-page").offset().top
    }, 2500, 'easeInOutCubic');
});