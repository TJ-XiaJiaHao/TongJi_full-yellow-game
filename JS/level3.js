/**
 * Created by Administrator on 2017/6/6.
 */
function levelThree(){
    $(".current-level").html("3");
    $(".bar").css("background","black");
    $("#front").html("<div id='view'><div class='box' id='bb'><canvas id='cas' ></canvas></div></div>");

    // $(".front-top").mousedown(function(e){
    //     mouseBeginY = e.clientY;
    //     topBeginY = parseInt($(".front-top").css("top"));
    //     moveTop();
    // })

    canvas = document.getElementById("cas"), ctx = canvas.getContext("2d");
    x1 = 0, y1 = 0, a = 30, timeout = 0, totimes = 100, distance = 30;
    saveDot = [];

    canvasBox = document.getElementById("bb");

    canvas.width = canvasBox.clientWidth;
    canvas.height = canvasBox.clientHeight;

    img = new Image();
    img.src = "pic1.png";

    flag = true;

    img.onload = function () {
        var w = canvas.height*img.width/img.height;
        ctx.drawImage(img, (canvas.width-w)/2, 0, w, canvas.height);
        tapClip()
    };

}


function getClipArea(e, hastouch){
    var x = hastouch ? e.targetTouches[0].pageX : e.clientX;
    var y = hastouch ? e.targetTouches[0].pageY : e.clientY;
    var ndom = canvas;

    while(ndom.tagName!=="BODY"){
        x -= ndom.offsetLeft;
        y -= ndom.offsetTop;
        ndom = ndom.parentNode;
    }

    return {
        x: x,
        y: y
    }
}

//通过修改globalCompositeOperation来达到擦除的效果
function tapClip() {
    var hastouch = "ontouchstart" in window ? true : false,
        tapstart = hastouch ? "touchstart" : "mousedown",
        tapmove = hastouch ? "touchmove" : "mousemove",
        tapend = hastouch ? "touchend" : "mouseup";

    var area;
    var x2,y2;

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = a * 2;
    ctx.globalCompositeOperation = "destination-out";

    window.addEventListener(tapstart, function funcA(e) {
        console.log('tapstart');
        clearTimeout(timeout);
        e.preventDefault();

        area = getClipArea(e, hastouch);

        x1 = area.x;
        y1 = area.y;

        drawLine(x1, y1);

        this.addEventListener(tapmove, tapmoveHandler);

        this.addEventListener(tapend, function funcC() {
            this.removeEventListener(tapmove, tapmoveHandler);

            //检测擦除状态
            timeout = setTimeout(function () {
                // console.log('setTimeout(function() {}, 10);');
                var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                var dd = 0;
                for (var x = 0; x < imgData.width; x += distance) {
                    for (var y = 0; y < imgData.height; y += distance) {
                        var i = (y * imgData.width + x) * 4;
                        if (imgData.data[i + 3] > 0) { dd++ }
                    }
                }
                i ++;
                console.log(i + 'funC' + dd / (imgData.width * imgData.height / (distance * distance)));
                if (dd / (imgData.width * imgData.height / (distance * distance)) < 0.001 && flag == true) {
                    // canvas.className = "noOp";
                    flag = false;
                    // window.setTimeout(end,1000); 
                    window.removeEventListener(tapstart, funcA);
                    this.removeEventListener(tapmove, tapmoveHandler);
                    this.removeEventListener(tapend, funcC)
                    // end();

                    $("body").animate({opacity:"0"},1000,function(){
                        $("#front").html("");
                        $("body").css("opacity","1");
                        backInit();
                        clearTimeout(timeout);
                        // levelFour();
                        levelFive();
                    })


                    
                }
            }, totimes)
        });

        function tapmoveHandler(e) {
            clearTimeout(timeout);

            e.preventDefault();

            area = getClipArea(e, hastouch);

            x2 = area.x;
            y2 = area.y;

            drawLine(x1, y1, x2, y2);

            x1 = x2;
            y1 = y2;
        }
    })
}

function drawLine(x1, y1, x2, y2){
//      ctx.save();
//      if(arguments.length==2){
//          saveDot = [[x1, y1]];
//          ctx.beginPath();
//          ctx.arc(x1, y1, a, 0, 2 * Math.PI);
//          ctx.fill();
//      }else {
//          saveDot.push([x2,y2]);
//          if(saveDot.length >= 3){
//              ctx.beginPath();
//              ctx.moveTo(saveDot[0][0], saveDot[0][1]);
//              ctx.quadraticCurveTo(saveDot[1][0], saveDot[1][1], saveDot[2][0], saveDot[2][1]);
//              ctx.stroke();
//              saveDot = [saveDot.pop()];
//          }
//      }
//      ctx.restore();

    ctx.save();
    ctx.beginPath();
    if(arguments.length==2){
        ctx.arc(x1, y1, a, 0, 2 * Math.PI);
        ctx.fill();
    }else {
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }
    ctx.restore();
}

//使用clip来达到擦除效果
function otherClip() {
    var hastouch = "ontouchstart" in window ? true : false,
        tapstart = hastouch ? "touchstart" : "mousedown",
        tapmove = hastouch ? "touchmove" : "mousemove",
        tapend = hastouch ? "touchend" : "mouseup";

    var area;

    canvas.addEventListener(tapstart, function (e) {
        clearTimeout(timeout);
        e.preventDefault();

        area = getClipArea(e, hastouch);

        x1 = area.x;
        y1 = area.y;

        ctx.save();
        ctx.beginPath();
        ctx.arc(x1, y1, a, 0, 2 * Math.PI);
        ctx.clip();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.restore();

        canvas.addEventListener(tapmove, tapmoveHandler);
        canvas.addEventListener(tapend, function () {
            canvas.removeEventListener(tapmove, tapmoveHandler);

            timeout = setTimeout(function () {
                var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                var dd = 0;
                for (var x = 0; x < imgData.width; x += distance) {
                    for (var y = 0; y < imgData.height; y += distance) {
                        var i = (y * imgData.width + x) * 4;
                        if (imgData.data[i + 3] > 0) {
                            dd++
                        }
                    }
                }
                if (dd / (imgData.width * imgData.height / (distance * distance)) < 0.4) {
                    canvas.className = "noOp";
                }
            }, totimes)

        });

        function tapmoveHandler(e) {
            e.preventDefault();
            area = getClipArea(e, hastouch);
            x2 = area.x;
            y2 = area.y;

            var asin = a * Math.sin(Math.atan((y2 - y1) / (x2 - x1)));
            var acos = a * Math.cos(Math.atan((y2 - y1) / (x2 - x1)));
            var x3 = x1 + asin;
            var y3 = y1 - acos;
            var x4 = x1 - asin;
            var y4 = y1 + acos;
            var x5 = x2 + asin;
            var y5 = y2 - acos;
            var x6 = x2 - asin;
            var y6 = y2 + acos;

            ctx.save();
            ctx.beginPath();
            ctx.arc(x2, y2, a, 0, 2 * Math.PI);
            ctx.clip();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.restore();

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(x3, y3);
            ctx.lineTo(x5, y5);
            ctx.lineTo(x6, y6);
            ctx.lineTo(x4, y4);
            ctx.closePath();
            ctx.clip();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.restore();

            x1 = x2;
            y1 = y2;
        }
    })
}

function end() {
    $("body").animate({opacity:"0"},1000,function() {
        $("body").css("opacity","1");
        $("#front").html("");
        backInit();
        levelFour();
    });
}