$(document).on('ready', function () {

    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 2000);
            return false;
        });

        // $('#back-to-top').tooltip('show');

    });


    // 
    $(window).on("scroll", function () {
        if ($(window).scrollTop()) {
            $('nav').addClass('top-nav');
        } else {
            $('nav').removeClass('top-nav');
        }

    });


    // animation

    window.sr = ScrollReveal();

    sr.reveal('.header_text', {
        duration: 3000,
        origin: 'top',
        distance: '150px',
    });
    sr.reveal('.o-nas-text', {
        duration: 3000,
        origin: 'top',
        distance: '150px',
    });
    sr.reveal('.o-nas-animate', {
        duration: 3000,
        origin: 'top',
        distance: '150px',
    });
    sr.reveal('.usligi-animate', {
        duration: 2700,
        // origin: 'bottom',
        // distance: '300px',
        viewFactor: 0.5,
    });
    sr.reveal('.ul-text', {
        duration: 2200,
        origin: 'bottom',
        distance: '300px',
    });


});


// 
$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});


// 
$(function () {
    // Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 2000);
                return false;
            }
        }
    });
});