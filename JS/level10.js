/**
 * Created by Administrator on 2017/6/2.
 */

function levelTen(){
    $(".current-level").html("10");
    $(".bar").css("background","yellow");
    $("#front").html("<div class='bubble-left'></div><div class='bubble-right'></div>\
        <div class='letters yL'></div><div class='letters eL'></div><div class='letters l1L'> \
        </div><div class='letters l2L'></div><div class='letters oL'></div><div class='letters wL'></div> \
        <div class='i1L'></div><div class='i2L'></div>");

    var indexs = [];
    $(".letters").click(function(){
        // $(this).hide();
        // alert('d');
        $(this).css("display", "none");
        var index = $(".letters").index(this);
        indexs.push(index);
        console.log(indexs.length);
        if(indexs.length == 6){
            for(var i = 0; i < 6; i ++)
                if(i != indexs[i]){
                    indexs = [];
                    setTimeout(function(){
                        $(".letters").css("display", "block");
                    }, 1000);
                    return;
                }
            endLevelTen();
        }
    });
    
}

function endLevelTen(){
    $(".letters").unbind("click");
    $("body").animate({opacity:"0"},1000,function(){
        $("#front").html("");
        $("#front").css("width","100%").css("height","100%").css("margin","0");
        $("body").css("opacity","1");
        backInit();
        Bye();
    });
}