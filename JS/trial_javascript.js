$(window).resize(function() {
    if ($(window).height() > $(window).width()) {
        $('video').height($(window).height());
    } else {
        $('video').width($(window).width());
        $('video').height('auto');
    }
});
$(window).trigger('resize');

$(function() {
    $(document).click(function(event) {
        $('.navbar-collapse').collapse('hide');
    });
});
/*
$(document).ready(function() {

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).on('resize scroll', function() {
        $('.odometer').each(function() {
            if ($(this).isInViewport()) {
                setTimeout(function() {
                    $('.odometer1').html(100);
                }, 100);
                setTimeout(function() {
                    $('.odometer1').html(8);
                }, 100);
                setTimeout(function() {
                    $('.odometer2').html(10);
                }, 100);
            } else {}
        });
    });
});
*/
/*for hide navbar out navbar click*/
/*$('.navbar-nav>li>a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
});
const subsOdometer = document.querySelector(".odometer");

const odometer = new Odometer({
    el: subsOdometer,
})

// odometer.update(10864);
//subsOdometer.innerHTML = 10684;*/