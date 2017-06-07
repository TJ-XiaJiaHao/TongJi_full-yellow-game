/**
 * Created by Administrator on 2017/6/2.
 */
$(document).ready(function(){
    document.body.onselectstart = document.body.ondrag = function(){
        return false;
    }
    levelFour();
});
function backInit(){
    $(".bar1").css("background","rgb(2,2,2)");
    $(".bar2").css("background","rgb(21,21,21)");
    $(".bar3").css("background","rgb(9,9,9)");
    $(".bar4").css("background","rgb(18,18,18)");
    $(".bar5").css("background","rgb(28,28,28)");
    $(".bar6").css("background","rgb(4,4,4)");
    $(".bar7").css("background","rgb(2,2,2)");
    $(".bar8").css("background","rgb(21,21,21)");
}