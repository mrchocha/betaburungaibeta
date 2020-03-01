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
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 355,
            "density": {
                "enable": true,
                "value_area": 789.1476416322727
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.48927153781200905,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 2,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 2.5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0.8,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 83.91608391608392,
                "size": 1,
                "duration": 3,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
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
