
$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainnavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

$("#navbarSupportedContent li a").on("mouseenter",function(){
    // $(this).css("color","green");
    $(this).css("font-weight","bold");
    $(this).css("color","green");


});
$("#navbarSupportedContent li a").on("mouseleave",function(){
    $(this).css("font-weight","200");
    $(this).css("color","inherit");
});
