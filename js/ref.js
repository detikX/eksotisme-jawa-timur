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
    if (Math.round(scrolled) > 40 && Math.round(scrolled) < 45) {
        $(".bromo").addClass('gunung')
    } else {
        $(".bromo").removeClass('gunung')
    }
}