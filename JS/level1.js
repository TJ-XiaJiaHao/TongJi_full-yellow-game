/**
 * Created by Administrator on 2017/6/2.
 */
function levelOne(){
    //初始化
    var currntBar = 0;
    var bars = $(".bar");

    //添加中心点击的黄色圆圈和对应的点击特效
    $("#front").html("<div class='middle-round'><div class='middle-round-inset'></div></div>");
    $(".middle-round-inset").click(function(){
        $(".middle-round").css("background","rgba(0,0,0,0)");
        setTimeout(function(){
            $(".middle-round").css("background","rgba(191,191,0,1)");
        },100);
        bars.eq(currntBar).css("background","yellow");
        currntBar++;
        if(currntBar == bars.length){
            //收拾烂摊子
            $(".middle-round-inset").unbind();
            $("body").animate({opacity:"0"},1000,function(){
                $("#front").html("");
                $("body").css("opacity","1");
                backInit();
                levelTwo();
            })
        }
    });

}