//使用ajax提交数据
var h = {};
h.get = function(url.data,ok,error){
	$,ajax({
		url:url,
		data:data,
		dataType:'json',
		success:ok,
		error:error
	})
}
h.post = function(url,data,ok,error){
	$.ajax({
		url:url,
		data:data,
		type:'post',
		dataType:'json',
		success:ok,
		error:error
	})
}
//获取url参数
h.url = function(url){
	if(!url){
		url = location.search.substring(1);
	}else{
		url.substr(url.indexOf('?') + 1);
	}
}
var args = new Object();//声明并初始化一个类
//获得地址（url？后面的字符串
var query = decodeURI(url);
var pairs = query.split('&')//分割url，因为&是用来连接下一个参数的
for(var i = 0;i<pairs.length;i++){
	var pos = pairs[i].indexOf('=');
	if(pos == -1) continue;//它在找有等号的数组【i】
	var argname = pairs[i].substring(0,pos);//参数名字
	var value = pairs[i].substring(pos + 1);//参数值
	//以键值对的形式存放到args对象中
	args[argname] = decodeURI(value);
}
return args;
}
//返回字符串的实际长度，一个汉字算2个长度
String.prototype.strlen = function(){
	return this.replace(/[^\x00-\xff]/g,'**').length;
}
console.log('dfsdfd'.strlen());// 6 

//字符串超出省略
String.prototype.cutstr = function(len){
	var restr = this;
	var wlength = this.replace(/[^\x00-\xff]/g,'**').length;
	if(wlength > len){
		for(var k = len/2;k<this.length;k++){
			if(this.substr(0,k).replace(/[^\x00-\xff]/g,'**').length >=len){
				restr = this.substr(0,k) + '...';
				break;
			}
		}
	}
	return restr;
}
console.log('dfsdgds'.cutstr(5));// dfsdg...


//替换全部  
String.prototype.replaceAll = function (s1, s2) {  
    return this.replace(new RegExp(s1, "gm"), s2)  
}  
console.log('abcdabc'.replaceAll('abc','ef'));//efdef


//判断是否以某个字符串开头
String.prototype.startWith = function(s){
	return this.indexOf(s) == 0;
}












