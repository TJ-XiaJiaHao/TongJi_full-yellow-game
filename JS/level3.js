/**
 * Created by Administrator on 2017/6/6.
 */
function levelThree(){
    $(".current-level").html("3");
    $(".bar").css("background","yellow");
    $("#front").html("<div class='label-wrap'><label>3</label><canvas id='canvas'></canvas></div>")

    $(".label-wrap").click(function(e){
        drawCir(e);
    });

}
function drawCir(e){
    var canvas = document.getElementsById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.save();                                 //保存原图像
    ctx.beginPath();                            //开始绘制图片
    ctx.arc(250,250,200,0,2*Math.PI);           //画一个圆
    ctx.clip();                                  //剪切这个圆
    ctx.clearRect(0,0,canvas.width,canvas.height);  //清空图像
    ctx.restore();                               //恢复
}