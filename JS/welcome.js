/**
 * Created by Administrator on 2017/6/2.
 */

function welcome(){
    $(".current-level").html("");
    $(".bar").css("background","black");
    $("#front").html("<div class='start-tri'></div>");

    $(".start-tri").click(function(){
        // alert();
        // $("#front").html("");
        // levelEleven();
        levelOne();
        // levelNine();
    });
}
