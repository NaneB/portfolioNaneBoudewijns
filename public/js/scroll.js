$('#cv').fadeOut();

function main() { 

          function parallax(){
                var scrolled = $(window).scrollTop();
                
                $('#bg1').css('top', -(scrolled * 2.5) + 'px');
                $('#bg2').css('top', -(scrolled * -(0.25)) + 'px');
                if(scrolled>$(window).height()*2){
                    $('#cv').fadeIn();
                    $('#bg1').fadeOut();
                    $('#bg2').fadeOut();
                }else{
                    $('#cv').fadeOut();
                    $('#bg1').fadeIn();
                    $('#bg2').fadeIn();
                    
                }
                $('#about span').css('top', 101-(scrolled * 0.095) + 'vh');

                $('#about span').animate({'opacity':'1'},1500);

            }
            $(window).scroll(function(e){
                parallax();
            });
    
}
window.onload = function() {
    main();   
    $('#fade').fadeOut( 2000 );
}

