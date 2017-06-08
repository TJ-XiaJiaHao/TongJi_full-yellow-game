/**
 * Created by Administrator on 2017/6/2.
 */
var mouseBeginY = 0
var topBeginY = 0
var isEnding = false
function levelTwo(){
    $(".current-level").html("2");
    $(".bar").css("background","black");
    $("#front").html("<div class='front-top'><div class='top-bg'></div><div class='front-tan'></div></div><div id='levelTwo'>2</div><div class='front-bottom'><div class='bottom-tan'></div></div>")

    $(".front-top").mousedown(function(e){
        mouseBeginY = e.clientY;
        topBeginY = parseInt($(".front-top").css("top"));
        moveTop();
    })
}
function moveTop(){
    $(document).mousemove(function(e){
        var relativePos = e.clientY - mouseBeginY;
        $(".front-top").css("top",topBeginY + relativePos + "px");

        var topOffset = $(".front-top").offset().top;
        if(topOffset >= 0 ){
            $(".front-top").css("top","0");
            $(document).unbind();
            if(!isEnding)endLevel2();
        }
    })
    $(document).mouseup(function(){
        $(".front-top").animate({top:topBeginY + "px"},500);
        $(document).unbind();
    })
}
function endLevel2(){
    //收拾烂摊子
    $("body").animate({opacity:"0"},1000,function() {
        $("body").css("opacity","1");
        $("#front").html("");
        backInit();
        levelThree();
    });
}