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
    if (Math.round(scrolled) > 4 && Math.round(scrolled) < 5.2) {
        $(".banyuwangi").addClass('gunung')
    } else {
        $(".banyuwangi").removeClass('gunung')
    }

    if (Math.round(scrolled) > 18 && Math.round(scrolled) < 19.2) {
        $(".djawatan").addClass('gunung')
    } else {
        $(".djawatan").removeClass('gunung')
    }

    if (Math.round(scrolled) > 54 && Math.round(scrolled) < 55.2) {
        $(".malang").addClass('gunung')
    } else {
        $(".malang").removeClass('gunung')
    }

    if (Math.round(scrolled) > 73 && Math.round(scrolled) < 74.2) {
        $(".batoe").addClass('gunung')
    } else {
        $(".batoe").removeClass('gunung')
    }

    if (Math.round(scrolled) > 84 && Math.round(scrolled) < 85.2) {
        $(".sby").addClass('gunung')
    } else {
        $(".sby").removeClass('gunung')
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
})
$("#djawatan").on("shown.bs.modal", function (s) {
    $(".slider-for").slick("setPosition"),
        $(".slider-nav").slick("setPosition")
})



$("#goldcopper").on("shown.bs.modal", function (s) {
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