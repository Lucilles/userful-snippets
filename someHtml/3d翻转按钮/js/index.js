/**
 * Created by lenovo on 2017/3/28.
 */

$("#more").on("mouseover",function () {
    var more = document.getElementById("moreCss");
    var more1 = document.getElementById("moreCss1");
    if(more&&more1){
        more.innerHTML += "#more:after{transform:rotateX(0deg);" +
        "-ms-transform:rotateX(0deg); 	/* IE 9 */" +
        "-moz-transform:rotateX(0deg);	/* Firefox */" +
        "-webkit-transform:rotateX(0deg); /* Safari 和 Chrome */" +
        "-o-transform:rotateX(0deg)};";

        more1.innerHTML += "#more:before{transform:rotateX(90deg);" +
        "-ms-transform:rotateX(90deg); 	/* IE 9 */" +
        "-moz-transform:rotateX(90deg);	/* Firefox */" +
        "-webkit-transform:rotateX(90deg); /* Safari 和 Chrome */" +
        "-o-transform:rotateX(90deg)};"
    }else{
        var style1 = document.createElement("style");
        var style2 = document.createElement("style");
        var head = document.getElementsByTagName('head')[0];
        style1.type = "text/css";
        style2.type = "text/css";
        style1.id = "moreCss";
        style2.id = "moreCss1";

        head.appendChild(style1);
        head.appendChild(style2);
        var moreCss = document.getElementById("moreCss");
        var moreCss1 = document.getElementById("moreCss1");
        console.log(moreCss.innerHTML);
        moreCss.innerHTML += "#more:before{transform:rotateX(90deg);" +
        "-ms-transform:rotateX(90deg); 	/* IE 9 */" +
        "-moz-transform:rotateX(90deg);	/* Firefox */" +
        "-webkit-transform:rotateX(90deg); /* Safari 和 Chrome */" +
        "-o-transform:rotateX(90deg)};";

        moreCss1.innerHTML +="#more:after{transform:rotateX(0deg);" +
        "-ms-transform:rotateX(0deg); 	/* IE 9 */" +
        "-moz-transform:rotateX(0deg);	/* Firefox */" +
        "-webkit-transform:rotateX(0deg); /* Safari 和 Chrome */" +
        "-o-transform:rotateX(0deg)};";
    }
}).on("mouseleave", function () {
    var moreCss = document.getElementById("moreCss");
    var moreCss1 = document.getElementById("moreCss1");
    moreCss.innerHTML = "";
    moreCss1.innerHTML = ""
})








