/*resize window respectly*/
window.onunload = function() { window.scrollTo(0, 0); }
var tag = ["Tredation Of Aryuveda", "Nutrition Meat's Test", "Healthy Pocket, Healthy Life"];
var info = ["A premium seasoning made from the knowledge of 'Sushruta Samhita' that mixes with every food.",
    "How about taking your normal food and turning it super Nutritious while you still eat the same food?",
    "Our seasoning costs less than a buck per serving. Now that's delicious!"
];
var counter = 1;
var elem1 = document.getElementById("tag");
var elem2 = document.getElementById("info");

function change() {
    elem1.innerHTML = tag[counter];
    elem2.innerHTML = info[counter];
    counter++;
    if (counter >= tag.length) {
        counter = 0;
        // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
    }
}
var inst = setInterval(change, 3000);
$(window).resize(function() {
    if ($(window).width() < $(window).height()) {
        $('video').height($(window).height() * 9 / 10);
        $('video').width('auto');
        $(".branch-home > img").css("content", "url(media/tree4crop.png)");
        $(".branch-home > img").css("max-width", $(window).width());
        $(".branch-home > img").css("max-height", "auto");
        $(".branch-home > img").css("margin-top", -$(window).height() / 2 - 30);
        $(".overtext1").css("margin-left", $(window).width() / 5 - 60);
        $(".overtext2").css("margin-left", $(window).width() / 10 - 10);
        $(".overtext1").css("margin-top", -$(window).height() * 2 / 3 + 80);
        $(".overtext2").css("margin-top", -$(window).height() * 1.5 / 3 + 50);
        $(".overtext1,.overtext2").css("font-size", "10vh");
        $("#info-home").css("min-height", "200px");
    } else {
        $('video').width($(window).width());
        $('video').height('auto');
        $(".br1").css("content", "url(media/tree4.png)");
        $(".branch-home > img").css("display", "flex");
        $(".branch-home > img").css("margin-left", "0px");
        $(".branch-home > img").css("margin-top", "0px");
        $(".branch-home > img").css("max-width", $(window).width() * 1.5 / 2);
        $(".overtext1").css("margin-left", $(window).width() / 5 - 50);
        $(".overtext2").css("margin-left", $(window).width() / 4 - 5);
        $(".overtext1").css("margin-top", -$(window).width() * 2 / 5);
        $(".overtext2").css("margin-top", -$(window).width() * 1.5 / 5);
        $("#info-home").css("min-height", "600px");
    }
    $(".branch-home").css("margin-top", -$(window).width() * 1.47 / 5);
    $('About').width($(window).width());
});
$(window).trigger('resize');
/*for hide navbar on navbar click*/
$(function() {
    $(document).click(function(event) {
        $('.navbar-collapse').collapse('hide');
    });
});

/*for hide navbar out navbar click*/
$('.navbar-nav>li>a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
});
AOS.init({
    duration: 1200,
})