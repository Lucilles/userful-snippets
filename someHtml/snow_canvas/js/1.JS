(function($){
	var $window = window,
	$timeout = setTimeout;
//创建一个canvas元素
	var supportCanvas = function(){
		var eCan = document.createElement('canvas');
		return (typeof eCan.getContext) =='function';
	};
	//全局show方法传入两个参数
	window.Snow = function(element,settings){
		(function(){
			var lastTime = 0;
			var vendors = ['webkit','moz'];
			for(var x = 0;x< vendors.length && !window.requestAnimationFrame; ++x){
				window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
				window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];			
			}
			if(!window.requestAnimationFrame){
				window.requestAnimationFrame = function(callback,element){
					var timeToCall = 14;
					var id = window.setTimeout(function(){
						callback(timeToCall);
					},timeToCall);

					return id;
				}
			}
			if(!window.cancelAnimationFrame){
				window.cancelAnimationFrame = function(id){
					clearTimeout(id);
				}
			}
		}());//一个判断动画运行与取消的自运行函数
		this.settings = settings,
		this.flakes = [],//雪花的数量
		this.flakeCount = settings.count,
		this.mx = -100,
		this.my = -100,
		this.init(element)
	};//this指window
	Snow.prototype.init = function(element){
		this.canvas = element.get(0),
		this.ctx = this.canvas.getContext('2d'),
		this.canvas.width = $window.innerWidth,
		this.canvas.height = $window.innerHeight,
		this.flakes = [];
		for(var i = 0;i<this.flakeCount;i++){
			var x = Math.floor(Math.random()*this.cavas.width),//取值从1-window的宽
			y = Math.floor(Math.random()*this.canvas.height),
			size = Math.floor(100*Math.random())%this.settings.size + 2,
			speed = Math.floor(100*Math.random())%this.settings.speed + Math.random()*size/10 + .5,
			opacity = .5*Math.random() + this.settings.opacity;
			this.flakes.push({
				speed:speed,
				veLY;speed,
				veLX:0,
				x:x,
				y:y,
				size:size,
				stepSize:Math.random()/30,
				step:0,
				angle:180,
				opacity:opacity
			})
		}
		1 == this.settings.interaction && this.canvas.addEventListener('mousemove',function(e){
			this.mx = e.clientX,this.my = e.client
		});
		var thiz = this;
		$($window).resize(function(){
			thiz.ctx.clearRect(0,0,thiz.canvas.width,thiz.canvas.height),
			thiz.canvas.width = $window.innerWidth,thiz.canvas.height = $window.innerHeight
		});
		if(typeof this.setting.image === 'string'){
			this.image = $("<img src='" + this.settings.image + "' style='display:none'>")
		};
		this.snow();

	},Snow.prototype.snow = function(){
		var thiz = this,
		render = function(){
			thiz.ctx.clearRect(0,0,thiz.canvas.width,thiz.canvas.height);
			for(var i = 0;i<thiz.flakeCount;i++){
				var flake = thiz.flakes[i],
				x = thiz.mx,
				y = thiz.my,
				minDist = 100,
				x2 = flake.x,
				y2 = flake.y,
				dist = Math.sqrt((x2 - x)*(x2 - x) +(y2 - y))
			}
		}
	}









})