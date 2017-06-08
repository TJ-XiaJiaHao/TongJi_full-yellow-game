/**
 * Created by Administrator on 2017/6/2.
 */
var isdownLeft = false
var isdownRight = false
var oldX = null
var rotateLeft = 0
var rotateRight = 0
var isLeftDone = false
var isRightDone = false
function levelFive(){
    $(".current-level").html("5");
    $(".bar").css("background","black");
    $("#front").html("<div class='backView'><div class='left-black'></div><div class='left-grey'></div><div id='levelFive'>5</div><div class='right-black'></div><div class='right-grey'></div></div>")

    $(".left-grey").mousedown(function(e){
        isdownLeft = true;
        isdownRight = false;
        oldX = e.clientX;
    });
     $(".right-grey").mousedown(function(e){
        isdownRight = true;
        isdownLeft = false;
        oldX = e.clientX;
    });
    $("html").mousemove(function(e){
        if(isdownLeft){
            $(".left-grey").css("transform","rotate("+(rotateLeft + e.clientX-oldX)+"deg)");
        }else if(isdownRight){
            $(".right-grey").css("transform","rotate("+(rotateRight + e.clientX-oldX)+"deg)");
        }
    });
    $("html").mouseup(function(e){
        if(isdownLeft){
            rotateLeft += e.clientX-oldX;
            if(rotateLeft != 0 && rotateLeft % 60 == 0) isLeftDone = true;
        }else if(isdownRight){
            rotateRight += e.clientX-oldX;
            if(rotateRight != 0 && rotateRight % 60 == 0) isRightDone = true;
        }
        isdownLeft = isdownRight = false;
        oldX = null;

        if (isLeftDone && isRightDone) {
            endLevelFive();
            rotateRight = rotateLeft = 0;
            isLeftDone = isRightDone = false;
        };

    });
}

function endLevelFive(){
    $("html").unbind("mousemove");
    $("html").unbind("mouseup");
    $(".left-grey").unbind("mousedown");
    $(".right-grey").unbind("mousedown");
    $("body").animate({opacity:"0"},1000,function(){
        $("#front").html("");
        $("body").css("opacity","1");
        backInit();
        levelSix();
    });
}


