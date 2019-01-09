function get(link ,callback){
    $.getJSON(link)
    .done(function(response,status){
            callback(response);
    })
}

get("js/json/data.json", init)


function init(data){
    var lvl = 0;
    var stats = 0;
    var numbers = 0;
    
    //team info
    $('.last>.lvl').text(" Niveau moyen: " +parseInt(lvl) );
    $('.last>.stats').text(" Stat moyennes: " +parseInt(stats) );
    $('.last>.ratio').text(" Ratio moyen: " +parseInt(stats/lvl));
    //count numbers of members
    $(data).each(function(){
        if($(this)[0].pseudo!=""){
            numbers++
        }
    })
    //create list
    $(data).each(function(){
        if($(this)[0].pseudo!=""){
            $("#name").append(`
                <li class="pseudo">${$(this)[0].pseudo}</li>
            `)
            lvl+= parseInt($(this)[0].Lvl);
            stats+= parseInt($(this)[0].Stat);
        }

    })
    lvl2 = parseInt(lvl/numbers);
    stats2 = parseInt(stats)/parseInt(numbers);

    //team info
    $('.actual>.lvl').text(" Niveau moyen: " +parseInt(lvl2) );
    $('.actual>.stats').text(" Stat moyennes: " +parseInt(stats2) );
    $('.actual>.ratio').text(" Ratio moyen: " +parseInt(stats2/lvl2));

    //last modif
    $('.time').text(" Last update : "+$(data)[0].Date);

    //list of member's name selected
    $("li").click(function(){
        $("li").removeClass("selected")
        $(this).addClass("selected")
    })
    $("#logo").click(function(){
        $("li").removeClass("selected")
        $(".team").addClass("selected")
    })    
}

//detail and graphic open
$(".arrows-up").click(function(){
   $(this).addClass("nop");
   $(".chat").css( "height", "80vh" );
   $(".arrows-down").removeClass("nop");
   $(".select-list").removeClass("nop");
   $("#xp-container").removeClass("nop");
   $(".index").addClass("little");
   $(".chat").removeClass("bas");
  
})
//detail and graphic close
$(".arrows-down").click(function(){
    $(this).addClass("nop");
    $(".chat").css( "height", "25vh" );
    $(".arrows-up").removeClass("nop");
    $(".select-list").addClass("nop");
    $("#xp-container").addClass("nop");
    $("#stat-container").addClass("nop");
    $("#hc-container").addClass("nop");
    $(".index").removeClass("little");
    $(".chat").addClass("bas");
 })
 $(".index").click(function(){
    $(".dico").removeClass("nop");
    setTimeout(function(){ 
        $(".dico").removeClass("nop2"); }, 50);
 })
 $(".exit").click(function(){
    $(".dico").addClass("nop2");
    setTimeout(function(){ 
        $(".dico").addClass("nop"); }, 100);
 })

 //Click on buttons
 $(".Experience").click(function(){ 
    $("#xp-container").removeClass("nop");
    $("#stat-container").addClass("nop");
    $("#hc-container").addClass("nop");
 })
 $(".Stats").click(function(){ 
    $("#xp-container").addClass("nop");
    $("#stat-container").removeClass("nop");
    $("#hc-container").addClass("nop");
 })
 $(".HeroCon").click(function(){ 
    $("#xp-container").addClass("nop");
    $("#stat-container").addClass("nop");
    $("#hc-container").removeClass("nop");
 })
