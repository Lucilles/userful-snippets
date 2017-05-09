;
(function() {
    document.documentElement.style.height = document.documentElement.clientHeight + 'px';
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 12 + "px";

    function setHTML() {
        var clientWidth = document.documentElement.clientWidth,
            scale = clientWidth / 1200;
        if (scale < 1) {
            document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=1200, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
        }

    }
    setHTML();
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
        if (window.orientation === 180 || window.orientation === 0) {
            window.location.reload();
        }
        if (window.orientation === 90 || window.orientation === -90) {
            window.location.reload();
        }
    }, false);
})();
