
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

// 设置手机屏幕中间内容的高度
var vh = window.document.documentElement.getBoundingClientRect().height;
var ifvh = vh - $('.header').height() - $('.yCmsContentSlot').height();
$('#iframe').height(ifvh);

//去掉select选择框重复的第一个类别option
 $('.tip2 select').mouseover(function(){
    $(this).find('.more').hide(0);  //more为第一个option的类名                 
 })

//验证正确的手机号码格式
//input失去焦点验证姓名手机号是否为空
        $('.name').blur(function(){
            if($(this).val()!=""){
                $('#warn-info-name').addClass('dis_none');
            }else{
                $('#warn-info-name').removeClass('dis_none')
            }
        })
        $('.tel').blur(function(){
            var phone = $('.tel').val();
            if((/^1[34578]\d{9}$/.test(phone))){
                $('#warn-info-phone').addClass('dis_none');
            }else{
                $('#warn-info-phone').removeClass('dis_none')
            }
        })
        if( !($('.name').val()!="" && (/^1[34578]\d{9}$/.test(phone)))){
            return;
        }
        //点击立即预约按钮验证姓名及手机号格式
        $('.btn3').on('click',function(e){
            e.preventDefault();
            var phone = $('.tel').val();
            if($('.name').val()==""){
                $('#warn-info-name').removeClass('dis_none');
                return;
            }
            if(!(/^1[34578]\d{9}$/.test(phone))){
                $('#warn-info-phone').removeClass('dis_none');
                return;
            }
            $('.modal_content').hide();
            $('.submit-success').removeClass('dis_none');
        })

        //阻止手机端软键盘弹出高度缩小
        function showform() {
            $(".mobilecontent").height($(window).height()-48);
        }
            //弹出表单页面
        $('.btn').on('click',function(){
            $('html,body,mobilecontent').css({'overflow':'hidden'});
            showform();
        })
        //点击空白隐藏表单
        $('.modal_form').on('click',function(e){
            e.preventDefault();
            //隐藏弹出框并重置表单数据
            reset();
            $('html,body,mobilecontent').css({'overflow':'visible'});
            $('.mobilecontent').css({'height':'auto'});
        });



