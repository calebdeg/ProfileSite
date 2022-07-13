// Menu Btn for Mobile & Reduced Window Size
$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('header').toggleClass('toggle');

        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();

        }

    });

// Top Scroll Btn
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