/**
 * Created by lenovo on 2017/3/14.
 */
/**
 *@filename:alert.js
 *@author:YanPei
 *@time:2017/3/14
 *@disc: 弹层信息
 */

$(function () {

    /*轮播图*/
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 3000,//可选选项，自动滑动
        speed:2000,//滑动速度
        autoplayDisableOnInteraction:false,//用户操作之后是否继续自动播放
        loop:true,//无限循环
        pagination: '.swiper-pagination',
        paginationClickable: true,
        paginationBulletRender: function (swiper, index, className) {
            return '<span class="' + className + '">' +  '</span>';
        }
    });

    /* 点击私人定制专线逻辑 start */
	
    /*验证用户名是否为空*/
    $("#name").blur(function () {
        var name = $(this).val();
        if(!name){
            $("#warn-info-name").show();
            return false;
        }else{
            $("#warn-info-name").hide();
            return false;
        }
    });
    /*验证手机号*/
    $("#phoneNumber").blur(function () {
        var phone = $(this).val();
        if(!(/^1[34578]\d{9}$/.test(phone))){
            $("#warn-info-phone").show();
            return false;
        } else{
            $("#warn-info-phone").hide();
            return false;
        }
    });
	
    /*点击baner上的按钮，弹出浮层显示第一步*/
    $("#btn").click(function () {
        showform();
    });
    /*点击右侧悬浮按钮，弹出浮层显示第一步*/
    $("#suspension").click(function () {
        showform();
    });
	function showform() {
        $("#common-bg,#first-step").show();
        $("#suspension").hide();
        $(".wrap").addClass("wrap-no-scroll").height($(window).height()-48);
        $("p.warn-info").hide();
	}
	
	var qsData = {};
    /* 第一步完成，点击下一步，跳转到第二步 */
    $("#next-step").on("touchstart", function () {
		// 按下时增加阴影效果
        $(this).css({
            "-webkit-box-shadow":"0 0 10px rgba(226, 84, 91, 0.7)",
            "box-shadow":"0 0 10px rgba(226, 84, 91, 0.7)",
            "font-size":".31rem"
        })
    }).on("touchend", function () {
        if($(this).is('.gray'))return;
		
		// 松开时，恢复button样式
        $(this).css({
            "-webkit-box-shadow":"none",
            "box-shadow":"none",
            "font-size":".3rem"
        });
		
        var name = $("#name").val();
        var phone = $("#phoneNumber").val();
        if(!name){
            $("#warn-info-name").show();
        }
        if(!(/^1[34578]\d{9}$/.test(phone))){
            $("#warn-info-phone").show();
        }
        if( !( name && (/^1[34578]\d{9}$/.test(phone)) ) ){
            return;
        }
        // 保存姓名及手机号；
        qsData.mobile = phone;
        qsData.name = name;
        qsData.province = $('#province').val();
        qsData.city = $('#city').val();

        $(this).addClass('gray').html('提交中...');
		
		// 取消背景的点击事件，直到提交成功时再恢复
		$("#common-bg").off("touchend");
		
		// 姓名电话变成不可输入，直到提交成功时再恢复
		$("#name").attr('readonly', 'true');
		$("#phoneNumber").attr('readonly', 'true');
		
        xdf.send('s1',qsData);
    })

    /* 第二步完成，点击立即开启，报名结束 */
    $("#submit").on("touchstart", function () {
		// 按下时增加阴影效果
        $(this).css({
            "-webkit-box-shadow":"0 0 10px rgba(226, 84, 91, 0.7)",
            "box-shadow":"0 0 10px rgba(226, 84, 91, 0.7)",
            "font-size":".31rem"
        })
    }).on("touchend", function () {
        if($(this).is('.gray'))return;

		// 松开时，恢复button样式
		$(this).css({
            "-webkit-box-shadow":"none",
            "box-shadow":"none",
            "font-size":".3rem"
        });
		
        var type = $("#design-type .select-info").html();
        var budget = $("#design-budget .select-info").html();
        if(budget ==  "设计预算"){
            $("#warn-info-budget").show();
        }
        if(type == "设计类型"){
            $("#warn-info-type").show();
        }
        if( type =="设计类型" || budget =="设计预算"){
            return;
        }

        // 提交表单信息到后台； (use code val)
        qsData.designType = $("#designType").val();
        qsData.designBudget = $("#designBudget").val();

        $(this).addClass('gray').html('提交中...');
		
		// 取消背景的点击事件，直到提交成功时再恢复
		$("#common-bg").off("touchend");
		
		// 取消设计类型的点击事件，直到提交成功时再恢复
		$("#design-type").off('click');
		$("#design-budget").off('click');
		
        xdf.send('s2',qsData);
    })

    /* 点击私人定制专线逻辑 end */
	
	var xdf=new XDF({
		url:{
			s1:'https://www.icolor.com.cn/htmlForm/submitform',
			s2:'https://www.icolor.com.cn/htmlForm/submitformsecond'
		},
		urlCallback:{
			s1:function(data){
				xdf.netOk();
				xdf.admitOk();
				if(data.status =='err'){
					alert(data.msg);
					return;
				}
				qsData.orderCode = data.orderCode;
				show(2);
			},
			s2:function(data){
				xdf.netOk();
				xdf.admitOk();
				if(data.status =='err'){
					alert(data.msg);
					return;
				}
				show(3);
			}
		}
	});

	var hideAll=function(){
        $("#common-bg").hide();
        $(".step").hide();
        $(".submit").hide();
        $("#suspension").show();
		$(".wrap").removeClass("wrap-no-scroll");
        /*清空数据*/
        $("input[type='text']").val("");
        $("#designBudget").val('');
        $("#designType").val('');
        $("#design-budget .select-info").html("设计预算");
        $("#design-type .select-info").html("设计类型");
        $("p.warn-info").hide();
		
        $("#design-type").css({
            "border-color":"#ececec",
            "outline":"0",
            "-webkit-box-shadow":"none",
            "box-shadow":"none"
        });
        $("#design-budget").css({
            "border-color":"#ececec",
            "outline":"0",
            "-webkit-box-shadow":"none",
            "box-shadow":"none"
        });
	};
	var show=function(num){
		switch(num){
			case 2:
				// 按钮切换 step1 to step2
				$('#next-step').removeClass('gray').html('下一步');
				// 恢复背景的触发事件
				$("#common-bg").on("touchend", function () {
					if (touchmoveflg) {
						touchmoveflg = false;
						return;
					}
					hideAll();
				});
				
				// 恢复姓名电话可输入
				$("#name").removeAttr('readonly');
				$("#phoneNumber").removeAttr('readonly');

				/* 隐藏第一步的表单 */
				$("#first-step").hide();
				/* 显示第二步的表单 */
				$("#second-step").show();
				
				break;
			case 3:
				$('#submit').removeClass('gray').html('立即开启');
				// 恢复背景的触发事件
				$("#common-bg").on("touchend", function () {
					if (touchmoveflg) {
						touchmoveflg = false;
						return;
					}
					hideAll();
				});
				
				// 恢复设计类型、预算的菜单点击事件
				$("#design-type").on('click', function() {
					slideUpClick($(this), $('.design-type'));
				});
				$("#design-budget").on('click', function() {
					slideUpClick($(this), $('.design-budget'));
				});
				
				/* 隐藏第二步的表单 */
				$("#second-step").hide();
				/* 显示提交成功弹层 */
				$("#submit-success").show();
				break;
		}
	};

	// 下方弹出式菜单的触发方法
	function slideUpClick($eventObj, $uiObj) {
        $("#common-bg1").show();
        $eventObj.css({
            "border-color":"#e2545b",
            "outline":"0",
            "-webkit-box-shadow":"0 0 8px rgba(226, 84, 91, 0.7)",
            "box-shadow":"0 0 8px rgba(226, 84, 91, 0.7)"
        });
        $uiObj.css({
            "bottom":"0",
            "transition" :".5s linear"
        });
	}
	
    /*设计预算*/
    $("#design-budget").click(function () {
		slideUpClick($(this), $('.design-budget'));
    });

    $(".design-budget .item").click(function () {
        var html = $(this).html();
		var value = $(this).attr('value');
		
        $("#design-budget .select-info").html(html);
        $("#designBudget").val(value);
		
        $("#design-budget").css({
            "border-color":"#ececec",
            "outline":"none",
            "-webkit-box-shadow":"none",
            "box-shadow":"none"
        });
        $("#warn-info-budget").hide();
		
        $("#common-bg1").hide();
        $(".design-budget").css({
            "bottom":"-5.6rem",
            "transition" :".5s linear"
        })
    });

    /*设计类型 点击事件*/
    $("#design-type").click(function () {
		slideUpClick($(this), $('.design-type'));
    });
	/* 选择一个设计类型 点击事件 */
    $(".design-type .item").click(function () {
        var html = $(this).html();
		var value = $(this).attr('value');
		
        $("#design-type .select-info").html(html);
        $("#designType").val(value);
		
        $("#design-type").css({
            "border-color":"#ececec",
            "outline":"0",
            "-webkit-box-shadow":"none",
            "box-shadow":"none"
        });
        $("#warn-info-type").hide();
        $("#common-bg1").hide();
        $(".design-type").css({
            "bottom":"-5.6rem",
            "transition" :".5s linear"
        })
    });

	var touchmoveflg = false;
    /*点击公共弹层部分 隐藏弹层信息*/
    $("#common-bg").on("touchmove", function () {
		touchmoveflg = true;
	}).on("touchend", function () {
		if (touchmoveflg) {
			touchmoveflg = false;
			return;
		}
		
		hideAll();
    });
    /*点击背景部分影藏 设计预算 类型选项*/
    $("#common-bg1").on("touchmove", function () {
		touchmoveflg = true;
	}).on("touchend", function() {
		if (touchmoveflg) {
			touchmoveflg = false;
			return;
		}
		
        $(this).hide();
        $(".design-budget").css({
            "bottom":"-5.6rem",
            "transition" :".5s linear"
        });
        $(".design-type").css({
            "bottom":"-5.6rem",
            "transition" :".5s linear"
        });
        $("#design-type").css({
            "border-color":"#ececec",
            "outline":"0",
            "-webkit-box-shadow":"none",
            "box-shadow":"none"
        });
        $("#design-budget").css({
            "border-color":"#ececec",
            "outline":"0",
            "-webkit-box-shadow":"none",
            "box-shadow":"none"
        });
	});

    /*提交成功或失败  关闭按钮功能*/
    $(".close").click(function () {
        $(this).parent(".submit").hide();
        $("#common-bg").hide();
        $("#suspension").show();
		
        $("#design-type").css({
            "border-color":"#ececec",
            "outline":"0",
            "-webkit-box-shadow":"none",
            "box-shadow":"none"
        });
        $("#design-budget").css({
            "border-color":"#ececec",
            "outline":"0",
            "-webkit-box-shadow":"none",
            "box-shadow":"none"
        });
    });


})
