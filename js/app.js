AOS.init();


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

