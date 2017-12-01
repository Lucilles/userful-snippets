/**
 * Created by lenovo on 2017/4/12.
 */
/**
 *@filename:useful-coding.js
 *@author:LuoWen
 *@time:2017/4/12
 *@disc: JS_snippets
 */

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
        //表单提交验证是否填写信息
        function validateForm($obj,warnId){
            var value = $($obj).val();
            if(value){
                $('#'+warnId).hide();
            }else{
                $('#'+warnId).show();
            }
        }


//手机端自适应
//iphone5
@media only screen and (min-width:310px) and (max-width: 370px) {
    .goods-lines1-left a img.zl_autoImg{
      width: 154px;
      height: 154px;
    }
}
//iphone6
@media only screen and (min-width:370px) and (max-width: 410px) {
    .goods-lines1-left a img.zl_autoImg{
      width: 180px;
      height: 180px;
    }
}
//iphone 6plus
@media only screen and (min-width:410px) and (max-width: 470px){
    .goods-lines1-left a img.zl_autoImg{
      width: 199px;
      height: 199px;
    }
}


//表单提交
var  qsData={};
function submitData(nameId, phoneNumberId,nameWarnInfoId,phoneNumberWarnInfoId ){

    qsData={};
    /*��ȡ�û��������ݲ���֤*/
    var $name = $("#"+nameId);
    var $phoneNumber = $("#"+phoneNumberId);
    var name = $name.val();
    var phone = $phoneNumber.val();
    if(!name){
        $("#"+nameWarnInfoId).show();
    }
    if(!(/^1[34578]\d{9}$/.test(phone))){
        $("#"+phoneNumberWarnInfoId).show();
    }
    if( !( name && (/^1[34578]\d{9}$/.test(phone))) ){
        return;
    }
    /*�������� ��������*/
    qsData.mobile = phone;
    qsData.name = name + '-429';
    /*�������ԤԼ��ť �ύ����*/
    xdf.send('s1',qsData);
    $name.val("");
    $phoneNumber.val("");
}
//�ύ���ݺ���
var xdf=new XDF({
    url:{
        s1:'https://qatest.icolor.com.cn/htmlForm/submitform'
        //s2:'https://adc.icolor.com.cn/htmlForm/submitformsecond'
    },
    urlCallback:{
        s1:function(data){
            xdf.netOk();
            xdf.admitOk();
            if(data.status =='err'){
                console.log(data.msg);
                return;
            }
            else{
                $(".form").hide();
                $(".form-submit-success").show();
                $(".form-bg").off("click").on("click", function () {
                    $(this).hide()
                    $(".form-submit-success").hide();
                    $(".ic-side").show();
                    $("html").css("overflow","visible");
                    $("body").css("overflow","visible");
                })
            }
        },
        s2:function(data){
        }
    }
});


//失去焦点时判断验证信息
//  js
function chk(obj,warnId) {
    var value=$(obj).val();
    if(value){
        $("#"+warnId).hide();
    }
    else {
        $("#"+warnId).show();
    }
}
//  html
<input type="text" placeholder="您的称呼" id="txtName2" onblur="chk(this,'lbName2')"/>
<p class="name-warn-info warn-info" id="lbName2"> ! 请输入您的称呼</p>





//根据屏幕大小设置缩放的值
    function setHTML() {
        var clientWidth = document.documentElement.clientWidth,
            scale = clientWidth / 1200;
        if (scale < 1) {
            document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=1200, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=0');
        }

    }
    setHTML();

//设置图片居中
.ic-index-kv .carousel .item iframe {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}


//阻止ajax多次提交
$(function(){
    var one = true;//变量锁
    var data={
        name:$('#name').val(),
        tel:$('#tel').val()
    }
    $('#submit').click(function(){
        if(one){
            $.ajax({
                url:'userInfo.json',
                data:data,
                dataType:'json',
                type:'post',
                success:function(data){
                    console.log('success!')
                },
                error:function(){
                    console.log("error!")
                }
            });
            one = false;
        }
    })

})

//根据不同的访问设备跳转手机端和pc端
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

function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
    }
    }
    return flag;
}

function is_weixn(){    
    var ua = navigator.userAgent.toLowerCase();    
    if(ua.match(/MicroMessenger/i)=="micromessenger") {    
        return true;    
    } else {    
        return false;    
    }    
}  



//字体大小手机适配   用rem计算
//为了避免加载前字体很小突然变大的问题，应该先设置body为none，后面等字体调整好载show
(function () {
    var PSDWidth = 375, //设计图宽度
        maxWidth = 768, //最大适配iPad
        toRem = PSDWidth / 100,
        fs;

    function HTMLfontSize() {
        var html = document.documentElement,
            screenWidth = window.innerWidth,
            screenHeight = window.innerHeight;

        if (screenWidth <= maxWidth) {
            fs = screenWidth / toRem;
        } else {
            fs = maxWidth / toRem;
        }

        html.style.fontSize = fs + "px";
        html.style.height = screenHeight + "px";
    }

    HTMLfontSize();

    var timer = null;
    window.addEventListener("resize", function () {
        clearTimeout(timer);
        timer = setTimeout(HTMLfontSize, 100);
    }, false);
    $('body').show();
}());

