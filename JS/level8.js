/**
 * Created by Administrator on 2017/6/2.
 */
var oldY = 0;
var rectPos = 60;
var interval = null;

function levelEight(){
    $(".current-level").html("2");
    $(".bar").css("background","black");
    $("#front").html("<div class='left-rope'></div><div class='right-rope'></div><div class='bottom-rect'></div><div id='levelEight'></div>");
    $("#front").css("overflow", "hidden");

    $(".right-rope").mousedown(function(e){
        clearInterval(interval);
        console.log('mouseup');
        oldY = e.clientY;
        isMove = true;
    });
    $(".right-rope").mousemove(function(e){
        // clearInterval(interval);
        if(e.clientY - oldY < 0)
            return;
        if(isMove)
            $(".right-rope").css("bottom", (rectPos-(e.clientY-oldY)*0.1)+"%");
        if(isMove && rectPos < 0){
            console.log("flag 4");
            $(".left-rope").css("top", (rectPos-(e.clientY-oldY)*0.1 - 2)+"%");
            $(".bottom-rect").css("top", (rectPos-(e.clientY-oldY)*0.1 + 101)+"%")
            if(rectPos-(e.clientY-oldY)*0.1 + 101 <= 0)
                endLevelEight();
        }

    });
    $(".right-rope").mouseup(function(e){
        rectPos -= (e.clientY-oldY)*0.1;
        oldY = null;
        isMove = false;
        interval = setInterval(function(){
            rectPos += 0.1;
            $(".right-rope").css("bottom", (rectPos)+"%");
            if(rectPos < 0){
                console.log("rectPos < 0");
                $(".left-rope").css("top", (rectPos - 2) + "%");
                $(".bottom-rect").css("top", (rectPos + 101) + "%");
            }
            else {
                console.log("flag 2");
                $(".left-rope").css("top",  "-2%");
                $(".bottom-rect").css("top",  "100%");
            }
            if(rectPos > 59){
                console.log("flag 3");
                rectPos = 60;
                $(".right-rope").css("bottom", (rectPos)+"%");
                // $(".left-rope").css("top", "-2%");
                clearInterval(interval);
            }
                
        }, 10);
    });

}

function endLevelEight(){
    clearInterval(interval);
    $('.right-rope').unbind("mouseup");
    $(".right-rope").unbind("mousemove");
    $(".right-rope").unbind("mouseup");
    oldY = 0;
    rectPos = 60;
    interval = null;
    $("body").animate({opacity:"0"},1000,function(){
        $("#front").html("");
        $("#front").css("width","100%").css("height","100%").css("margin","0");
        $("body").css("opacity","1");
        backInit();
        levelNine();
    });
}