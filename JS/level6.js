/**
 * Created by Administrator on 2017/6/2.
 */
var color = 'black'
var enableClick = false
var yellows = 0
function levelSix(){
    $(".current-level").html("6");
    //初始化
    var currntBar = 0;
    var bars = $(".bar");
    //添加中心点击的黄色圆圈和对应的点击特效
    $("#front").html("<div class='right-round'><div class='right-round-inset'></div></div>");
    $("#front").css("width","").css("height","0").css("marginTop","500px");

    $('.bar').click(function(){
        if(enableClick){
            $(this).css('background', 'yellow');
            yellows ++;
        } else {
            backInit();
            yellows = 0;
        }
        if(yellows == 8) endLevelSix();
    });

    
    interval = setInterval(function(){
        if(color == 'yellow') {
            color = 'black';
            enableClick = false;
        }
        else {
            color = 'yellow';
            enableClick = true;
        }
        $(".right-round-inset").css('background', color);
    },3000);

}

function endLevelSix(){
    clearInterval(interval);
    $('.bar').unbind("click");
    $("body").animate({opacity:"0"},1000,function(){
        $("#front").html("");
        $("#front").css("width","100%").css("height","100%").css("margin","0");
        $("body").css("opacity","1");
        backInit();
        levelOne();
    });
}

