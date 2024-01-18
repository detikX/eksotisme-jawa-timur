$(document).ready(function () {
    AOS.init();
    new WOW().init();
})

//maen aos
$(".mbl,.jud,.jeep .dua").attr({ "data-aos": "fade-right", "data-aos-delay": "100", "data-aos-duration": "500", "data-aos-offset": "10", "data-aos-easing": "linear" })

$(".bocil").attr({ "data-aos": "fade-left", "data-aos-delay": "100", "data-aos-duration": "500", "data-aos-offset": "10", "data-aos-easing": "linear" })

$(".hello p").attr({ "data-aos": "fade-up", "data-aos-delay": "100", "data-aos-duration": "500", "data-aos-offset": "10", "data-aos-easing": "linear" })

$(".img,.bg-gold").attr({ "data-aos": "zoom-in", "data-aos-delay": "100", "data-aos-duration": "500", "data-aos-offset": "10", "data-aos-easing": "linear" })



window.onscroll = function () { ScrollIndicator() };

var mobil = "<div class='imgs'><img src='img/mobil-kanan.png' /></div>"
function ScrollIndicator() {
    // console.log(document.documentElement.scrollHeight);
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // var height = $(".ref").height();
    var scrolled = (winScroll / height) * 100;
    document.getElementById('footer__progress_bar').style.width = scrolled + "%";
    // document.getElementById('footer__progress_bar').innerHTML = Math.round(scrolled) + "%"
    console.log(scrolled);
    document.getElementById('footer__progress_bar').innerHTML = mobil;
    if (Math.round(scrolled) > 4 && Math.round(scrolled) < 6) {
        $(".banyuwangi").addClass('gunung')
    } else {
        $(".banyuwangi").removeClass('gunung')
    }

    if (Math.round(scrolled) > 40 && Math.round(scrolled) < 44) {
        $(".bromo").addClass('gunung')
    } else {
        $(".bromo").removeClass('gunung')
    }

    if (Math.round(scrolled) > 70 && Math.round(scrolled) < 73) {
        $(".malang").addClass('gunung')
    } else {
        $(".malang").removeClass('gunung')
    }
}

$('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
});


$("#pulau-merah").on("shown.bs.modal", function (s) {
    $(".slider-for").slick("setPosition"),
        $(".slider-nav").slick("setPosition")
}),
    $(".slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: false,
        arrows: true,
        asNavFor: ".slider-nav"
    }),
    $(".slider-nav").slick({
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 1,
        asNavFor: ".slider-for",
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    })
//     $('.slider-for').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false,
//         fade: true,
//         asNavFor: '.slider-nav'
//     });
// $('.slider-nav').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true
// });

$("#djawatan").on("shown.bs.modal", function (s) {
    $(".slider-for").slick("setPosition"),
        $(".slider-nav").slick("setPosition")
}),
    $(".slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: false,
        arrows: true,
        asNavFor: ".slider-nav"
    }),
    $(".slider-nav").slick({
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 1,
        asNavFor: ".slider-for",
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    })