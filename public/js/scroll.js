

function main() { 

          function parallax(){
                var scrolled = $(window).scrollTop();
                
                $('#me').css('top', -(scrolled * 0.5) + 'px');
                //$('.scroll').css('top', 101-(scrolled * 0.095) + 'vh');

                //$('.scroll').animate({'opacity':'1'},1500);

            }
            $(window).scroll(function(e){
                parallax();
            });
    
}
window.onload = function() {
    main();   
    $('#fade').fadeOut( 3500 );
}

