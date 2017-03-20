
//顶部导航栏浮窗实现
$(function(){
    var $body = $('body');
    if(!$body.hasClass('no-fixed-sidenav')){
        $(window).scroll(function() {
            var sTop = $(this).scrollTop();
            // 顶部的高度为4;
            // 通用banner的大概为400，需要减掉导航高度80
            if(sTop >= 40){
                $('body').addClass('fixed');
                if(sTop >= 310){
                    $('body').addClass('fixed-banner');
                }else{
                    $('body').removeClass('fixed-banner');
                }
            }else if(sTop < 40){
                $('body').removeClass('fixed');
            }
        });
    }
})

//动画滚动，实现点击页面滚动到指定位置。
 $('.mains').on('click',function(){
     var top1 = parseInt($('.tit1').offset().top-50);
     $('body').animate({scrollTop: top1}, 500);
 });


//页面表单初始化
var resetForm = function(){
    $('.ja_tip1 input[name=name').val('');
    $('.ja_tip1 input[name=mobile').val('');
    $('.ja_tip2 select[name=sex]').val('');
    $('.ja_tip2 select[name=age]').val('');
    $('.ja_tip2 select[name=province]').val('');
    $('.ja_tip2 select[name=area]').val('');
    $('.ja_tip2 select[name=year]').val('');
    $('.ja_tip2 select[name=school]').val('');
    $('.ja_tip2 input[name=company]').val('');
    $('.ja_tip3 input[name=work]').val('');
    $('.ja_tip3 textarea[name=idea]').val('');
    $('ja_tip3 .JA_uploaded .img_box li').remove();//去掉上传的图片
};

resetForm();//页面表单初始化

//点击遮罩层关闭弹框，点击内容不关闭
$('.bar').on('click',function(e){
    e.stopPropagation();
    $('.bar').addClass('dis_none');
    resetForm();
});
 $('.bar_content').on('click',function(e){
    e.stopPropagation();
    $('.bar').removeClass('dis_none');
});




