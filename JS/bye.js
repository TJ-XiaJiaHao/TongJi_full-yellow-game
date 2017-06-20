/**
 * Created by Administrator on 2017/6/2.
 */
var firstClick = false;
function Bye(){
    $(".current-level").html("");
    $(".bar").css("background","yellow");
    $("#front").html("<div class='avator'></div> \
        <div class='first-bubble'></div> \
        <div class='first-fake'> \
        <div style='position: absolute;top:90px; right:20px'>SAY</div> \
        <div style='position: absolute;top: 50px; right: 60px'>SING</div> \
        <div style='position: absolute;top: 100px; right: 100px' id='targetYELL'>YELL</div> \
        <div style='position: absolute;top: 130px; right: 150px'>SHOUT</div> \
        <div style='position: absolute;top: 180px; right: 90px'>SCREAM</div> \
        <div style='position: absolute;top: 70px; right: 130px'>MUMBLE</div> \
        </div> \
        <div class='next-bubble'></div> \
        <div class='next-fake'> \
        <div style='position: absolute;top:100px; left:20px'>AHH</div> \
        <div style='position: absolute;top: 150px; left: 60px'>EMM</div> \
        <div style='position: absolute;top: 200px; right: 100px'>BOOM</div> \
        <div style='position: absolute;top: 130px; right: 150px' id='targetOW'>OW</div> \
        <div style='position: absolute;top: 100px; right: 80px'>PHEW</div> \
        <div style='position: absolute;top: 60px; right: 130px'>WHOA</div> \
        </div> \
        <div id='gameOver'>YELLOW</div> \
        <div id='congradulations'> \
        <div>CONGRADULATION</div> \
        <div>YOU HAVE COMPLETED</div> \
        <div>YOU HAVE COMPLETED</div> \
        <div>YOU HAVE COMPLETED</div> \
        <div>THANKS FOR PLAYING!</div> \
        <div>I GUESS YOU KNOW BY NOW</div> \
        <div>WHTAS MY FAVORTITE COLOR ?</div> \
        <div>YES...</div> \
        <div>IT'S</div> \
        <div style='color:red'>RED</div> \
        </div> \
        ");
    // saybye();
    $(".first-fake div").click(function(){
        $(".first-fake div").hide();
        $(this).show();
        setTimeout(function() {
            $(".first-bubble").hide();
            $(".first-fake div").hide();
            $(".next-bubble").show();
            $(".next-fake").show();
            $(".next-fake div").show();
        }, 1000);
        if($(this).html() == "YELL"){
            console.log("yell");
            firstClick = true;
        }
        else{
            console.log("noe");
            firstClick = false;
        }
    });

    $(".next-fake div").click(function(){
        $(".next-fake div").hide();
        $(this).show();
        if($(this).html() == "OW" && firstClick == true)
            endGame();
        else
            setTimeout(function() {
                $(".first-bubble").show();
                $(".first-fake div").show();
                $(".next-fake").hide();
                $(".next-bubble").hide();
                firstClick = false;
            }, 2000);
    });

}

function endGame(){
    setTimeout(function(){
        $(".next-bubble").hide();
        setTimeout(function(){
            $("#targetYELL").show();
            $("#targetOW").hide();
            setTimeout(function(){
                $("#targetOW").show();
                $("#targetYELL").hide();
                $("#targetYELL").css("left","-500px");
                setTimeout(function(){
                    $("#targetOW").hide();
                    $("#targetOW").css("right","-500px");
                    $("#targetYELL").show();
                    setTimeout(function(){
                        $("#targetOW").show();
                        $("#targetYELL").hide();
                        $("#targetYELL").css("top","200px").css("left","-200px");
                        setTimeout(function(){
                            $("#targetOW").hide();
                            $("#gameOver").show();
                            saybye();
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
    
    
}

function saybye(){
    console.log("saybye");
    setTimeout(function(){
        $("#congradulations div").eq(0).show();
        setTimeout(function(){
            $("#congradulations div").eq(1).show();
            setTimeout(function(){
                $("#congradulations div").eq(3).css("opacity","0");
                $("#congradulations div").eq(2).css("opacity","0");
                $("#congradulations div").eq(2).show();
                setTimeout(function(){
                    $("#congradulations div").eq(3).show();
                    setTimeout(function(){
                        $("#congradulations div").eq(4).show();
                        setTimeout(function(){
                            $("#congradulations div").eq(5).show();
                            setTimeout(function(){
                                $("#congradulations div").eq(6).show();
                                setTimeout(function(){
                                    $("#congradulations div").eq(7).show();
                                    setTimeout(function(){
                                        $("#congradulations div").eq(8).show();
                                        setTimeout(function(){
                                            $("#congradulations div").eq(9).show();
                                        },1500);
                                    },1500);
                                },1500);
                            },1500);
                        },1500);
                    },10);
                },10);
            },1500);
        },1500);
    },1500);
}

