$(document).ready(function () {
    AOS.init();

    $('img').attr('loading', 'lazy')
})
$(".hello p, .wrap-detikx p").attr({ "data-aos": "fade-up", "data-aos-delay": "300", "data-aos-duration": "300", "data-aos-offset": "10", "data-aos-easing": "linear" })

$(".cene .all").attr({ "data-aos": "fade-in", "data-aos-delay": "300", "data-aos-duration": "300", "data-aos-offset": "10", "data-aos-easing": "linear" })

$(".wrap-detikx h3, .wrap-detikx h4").attr({ "data-aos": "fade-up", "data-aos-delay": "300", "data-aos-duration": "300", "data-aos-offset": "10", "data-aos-easing": "linear" })

$(".mobil-ekspedisi").attr({ "data-aos": "fade-left", "data-aos-delay": "300", "data-aos-duration": "300", "data-aos-offset": "10", "data-aos-easing": "linear" })



$("#pulau-merah").on("shown.bs.modal", function (s) {
    $(".slider-for").slick("setPosition"),
        $(".slider-nav").slick("setPosition")
}),
    $(".slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: !0,
        dots: !1,
        arrows: !0,
        asNavFor: ".slider-nav"
    }),
    $(".slider-nav").slick({
        slidesToShow: 3,
        arrows: !1,
        slidesToScroll: 1,
        asNavFor: ".slider-for",
        centerMode: !1,
        focusOnSelect: !0
    })

