$(document).ready(function () {
    AOS.init();
    new WOW().init();
})

//maen aos
$(".mbl").attr({ "data-aos": "fade-right", "data-aos-delay": "100", "data-aos-duration": "500", "data-aos-offset": "10", "data-aos-easing": "linear" })

$(".hello p").attr({ "data-aos": "fade-up", "data-aos-delay": "100", "data-aos-duration": "500", "data-aos-offset": "10", "data-aos-easing": "linear" })

$(".img").attr({ "data-aos": "zoom-in", "data-aos-delay": "100", "data-aos-duration": "500", "data-aos-offset": "10", "data-aos-easing": "linear" })

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
    document.getElementById('footer__progress_bar').innerHTML = mobil;
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