/**
 * Created by Administrator on 2017/6/7.
 */
var currentDrag = 0
function levelFour(){
    $(".current-level").html("4");
    $(".bar").css("background","yellow");
    $("#front").html("<div class='basic-bar bar-1'></div><div class='basic-bar bar-2'></div><div class='basic-bar bar-3'></div><div class='drag-bar drag-1'></div><div class='drag-bar drag-2'></div><div class='drag-bar drag-3'></div>")

    var dragBars = $(".drag-bar");

    $("#front").mousedown(function(e){
        var mouseX = e.clientX;
        var mouseY = e.clientY;
        var moveX = document.body.clientWidth - mouseX;
        var moveY = document.body.clientHeight - mouseY;
        dragBars.eq(currentDrag).css("left",moveX + "px").css("top",moveY + "px");
        $("#front").mousemove(function(e){
            var mouseX = e.clientX;
            var mouseY = e.clientY;
            var moveX = document.body.clientWidth - mouseX;
            var moveY = document.body.clientHeight - mouseY;
            dragBars.eq(currentDrag).css("display","block").css("left",moveX + "px").css("top",moveY + "px");
            check();
        })
        $("#front").mouseup(function(){
            $("#front").unbind("mousemove");
            dragBars.eq(currentDrag).css("display","none");
        })
    })
}
function check(){
    var basicoffsetX = parseFloat($(".basic-bar").eq(currentDrag).css("left"));
    var basicoffsetY = parseFloat($(".basic-bar").eq(currentDrag).css("top"));
    var dragOffsetX = parseFloat($(".drag-bar").eq(currentDrag).css("left"));
    var dragOffsetY = parseFloat($(".drag-bar").eq(currentDrag).css("top"));
    if(Math.abs(dragOffsetX - basicoffsetX) < 2 && Math.abs(dragOffsetY - basicoffsetY) < 2){
        $(".drag-bar").eq(currentDrag).css("display","none");
        $(".basic-bar").eq(currentDrag).css("borderColor","yellow").css("background","yellow");
        $("#front").unbind("mousemove");
        currentDrag++;
        console.log(currentDrag);
        if(currentDrag >= $(".basic-bar").length){
            end();
        }
    }
}
function end(){
    //收拾烂摊子
    $("body").animate({opacity:"0"},1000,function() {
        $("body").css("opacity","1");
        $("#front").html("");
        $("#front").unbind();
        backInit();
        levelFive();
    });
}