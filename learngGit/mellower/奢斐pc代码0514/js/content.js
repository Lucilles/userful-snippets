	$(function(){
		var height = $('.back').height();
		console.log(height);
		$('.translate .image').css('height',height);
	//点击出现导航栏
	$('.nav_icon').on('click',function(){
		$('.top_nav').animate({
			'left':'0',
		},800);
	})
	$('.close').on('click',function(){
		$('.top_nav').animate({
			'left':'-16%',
		},800);

	});
	var nav_height = $('.nav').height();
	$('.content').css('padding-top',nav_height);

//join页面
$('.join_list li').click(function(){
	var content = $(this).data('tit');
	console.log(content)
	$('.tab_content>div').addClass('dis_none');
	$('.'+content).removeClass('dis_none');
})
})
     function browserRedirect() {
        var sUserAgent= navigator.userAgent.toLowerCase();
        var bIsIpad= sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp= sUserAgent.match(/midp/i) == "midp";
        var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid= sUserAgent.match(/android/i) == "android";
        var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile";

        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
            window.location.href= 'http://ap.cepheicafe.com';
        } else {
            window.location.href= 'http://www.cepheicafe.com';
        }
    }
    browserRedirect();//调用自身，页面一打开就开始跳转

