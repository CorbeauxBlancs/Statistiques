$(".arrows-up").click(function(){
   $(this).addClass("nop");
   $(".chat").css( "height", "80vh" );
   $(".arrows-down").removeClass("nop");
   $("#container").removeClass("nop");
   $(".chat").removeClass("bas");
})
$(".arrows-down").click(function(){
    $(this).addClass("nop");
    $(".chat").css( "height", "25vh" );
    $(".arrows-up").removeClass("nop");
    $("#container").addClass("nop");
    $(".chat").addClass("bas");
 })