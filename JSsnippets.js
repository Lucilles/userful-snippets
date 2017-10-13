//手机端设置字体大小
var PSDWidth = 750, //设计图宽度
    maxWidth = 768, //最大适配iPad
    toRem = PSDWidth / 100,
    fs;

function HTMLfontSize() {
    var PSDWidth = 750, //设计图宽度
    maxWidth = 768, //最大适配iPad
    toRem = PSDWidth / 100,
    fs;
    var html = document.documentElement,
        screenWidth = window.innerWidth,
        screenHeight = window.innerHeight;

    if (screenWidth <= maxWidth) {
        fs = screenWidth / toRem;
    } else {
        fs = maxWidth / toRem;
    }
    console.log(fs+'ddd');
    html.style.fontSize = fs + "px";
    html.style.height = screenHeight + "px";
}

HTMLfontSize();

var timer = null;
window.addEventListener("resize", function () {
    clearTimeout(timer);
    timer = setTimeout(HTMLfontSize, 100);
}, false);


//设置屏幕可滑动与不可滑动
//开启滑动
function startMove() {
    $("body").css({
        overflowY: "auto"
    });
    fixVideo();
    document.removeEventListener("touchmove", stopDefault, false);
}
//禁止滑动
function stopMove() {
    $("body").css({
        overflowY: "hidden"
    });
    fixVideo(true);
    document.addEventListener("touchmove", stopDefault, false);
}
//阻止默认事件
function stopDefault(e) {
    e.preventDefault();
}


