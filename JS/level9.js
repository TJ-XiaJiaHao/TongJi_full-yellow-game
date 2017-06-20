/**
 * Created by Administrator on 2017/6/2.
 */
var roundSize = 120;
var interval = null;
var settime = 7;
function levelNine(){
    $(".current-level").html("9");
    $(".bar").css("background","black");
    $("#front").html("<div class='small-middle-round'><div class='black-middle-round'></div></div><div class='small-middle-round-inset'></div>");
    $(".small-middle-round-inset").on("mousedown", changeB)
    .on("mouseup", clear);
}

// function bigger(){
// 	roundSize += 10;
// 	$(".small-middle-round-inset").css("width",roundSize).css("height", roundSize);
// }

// function smaller(){
// 	if(roundSize >= 120)
// 		roundSize -= 120;
// 	$(".small-middle-round-inset").css("width",roundSize).css("height", roundSize);
// }
function clear(){
	settime = 7;
	clearInterval(interval);
	interval = setInterval(function(){
		roundSize -= 10;
		$(".small-middle-round-inset").css("width",roundSize).css("height", roundSize);
		if(roundSize == 120){
			clearInterval(interval);
			settime = 7;
		}
	},150);
}

function changeB(){
	clearInterval(interval);
	interval = setInterval(function(){
		roundSize += 10;
		settime -= 1;
		$(".small-middle-round-inset").css("width",roundSize).css("height", roundSize);
		$(".small-middle-round-inset").css("transform","translate(-50%, -50%)");
		if(settime == 0){
			clear();
			settime = 7;
		}
		if(roundSize > 1667){
			roundSize = 120;
			clearInterval(interval);
			settime = 7;
			clear();
	    $("body").animate({opacity:"0"},1000,function(){
	        $("#front").html("");
	        $("#front").css("width","100%").css("height","100%").css("margin","0");
	        $("body").css("opacity","1");
	        backInit();
	        levelTen();
	    });
		}
	},150);
}

// function changeS(){
// 	clearInterval(interval);
// 	console.log('clearIntervalS');
// 	// return function(){
// 	interval = setInterval(function(){
// 		roundSize -= 10;
// 		console.log(-10);
// 		$(".small-middle-round-inset").css("width",roundSize).css("height", roundSize);
// 		// }
// 		if(roundSize == 120){
// 			clearInterval(interval);
// 			settime = 0;
// 		}
// 	},250);
// 	// }
// }
