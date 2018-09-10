$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 1) {
            $(".logo").addClass("small-width");
            $(".logo img").addClass("small-height");

            $(".logo").addClass("transition-class");
            $(".logo img").addClass("transition-class");
        }  else {
            $(".logo").removeClass("small-width");
            $(".logo img").removeClass("small-height");

            $(".logo").addClass("transition-class");
            $(".logo img").addClass("transition-class");
        }
    });
});

// Toggle hide bar

var menu_btn = document.getElementById("menuBtn");
var menu = document.getElementById("menuTop");
// var redes = document.getElementById("logoRedesSociais");

menu_btn.onclick = function() {
    menu.classList.toggle("hide");
    // redes.classList.toggle("hide");
}