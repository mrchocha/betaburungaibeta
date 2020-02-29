$(window).resize(function() {
    $('.carousel-item').height($(window).height());
    $('#carouselExampleControls').height($(window).height());
});
$(window).trigger('resize');

$(function() {
    $(document).click(function(event) {
        $('.navbar-collapse').collapse('hide');
    });
});
new Glider(document.querySelector('.glider'), {
    slidesToScroll: "auto",
    slidesToShow: 1,
    draggable: true,
    dots: '.dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
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
