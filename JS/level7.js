/**
 * Created by Administrator on 2017/6/2.
 */
var oldX = 0;
var rotate = 0;
var isMove = false;
var rectangeMove = 100;
function levelSeven(){
    $(".current-level").html("7");
    $(".bar").css("background","black");
    $('#front').html("<div class='rubber'></div><div class='rectange'></div>")
    // $("#front").css("width","").css("height","0").css("marginTop","22%");

    $(".rubber").mousedown(function(e){
        oldX = e.clientX;
        isMove = true;
    });
    $("html").mousemove(function(e){
        if(isMove){
            $(".rubber").css("transform","rotate("+(rotate + e.clientX-oldX)+"deg)");
            $(".rectange").css("right", (rectangeMove-(e.clientX-oldX)*0.1)+"%");
        }     
    });
    $("html").mouseup(function(e){
        rotate += e.clientX-oldX;
        rectangeMove -= (e.clientX-oldX)*0.1;
        oldX = null;
        isMove = false;
    });

    interval = setInterval(function(){
        if(rectangeMove < 0.1){
            endLevelSeven();
        }
    }, 100);
}

function endLevelSeven(){
    clearInterval(interval);
    $('.rubber').unbind("mouseup");
    $("html").unbind("mousemove");
    $("html").unbind("mouseup");
    oldX = rotate = 0;
    isMove = false;
    rectangeMove = -100;
    $(".rubber").hide();
    $("body").animate({opacity:"0"},1000,function(){
        $("#front").html("");
        $("#front").css("width","100%").css("height","100%").css("margin","0");
        $("body").css("opacity","1");
        backInit();
        levelEight();
    });
}
