$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 500) {
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