$(document).ready(function(){
// Menu Btn for Mobile & Reduced Window Size
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

// Top Scroll Btn
    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('header').toggleClass('toggle');

        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }
    });

    $('a[href*="#"').on('click',function(e){
        
        e.preventDefault();

        $('html, body').animate({

            scrollTop : $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
        );
    });

});
