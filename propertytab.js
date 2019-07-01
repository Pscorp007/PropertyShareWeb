$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainnavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});


$("#navbarSupportedContent li a").on("mouseenter",function(){
    $(this).css("font-weight","bold");
    $(this).css("color","green");
});
$("#navbarSupportedContent li a").on("mouseleave",function(){
    $(this).css("font-weight","200");
    $(this).css("color","inherit");
});

$(".card").on("mouseenter",function(){
    $(this).css("border","2px solid orange");
});
$(".card").on("mouseleave",function(){
    $(this).css("border","0px solid white");
});

$(".card").fadeOut( "veryfast" );
$(".card").fadeIn( "slow" );


// TASKS
// change active status of two
