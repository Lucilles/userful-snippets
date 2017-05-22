$(function(){
$('.nav_icon').on('click',function(){
	$('.nav_list').animate({'left':0},800);
})
$('.close').on('click',function(){
	$('.nav_list').animate({'left':'-40%'},800);
});
var height = $('.nav').height();
$('.content').css('padding-top',height);
//join页面部门职位跳转
$('.join_list li').on('click',function(){
	var tit = $(this).data('tit');
	$('.tab_content').addClass('dis_none');
	$('.'+tit).removeClass('dis_none');
})


})