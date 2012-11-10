// JavaScript Document
(function(){
	var root  = this, $ = root.$ || (root.$ = function(o){
		var o = Object.prototype.toString.call(o) === '[object String]'?document.getElementById(o):o;
		return o;
	});
	var fn = $.fn || ($.fn = {});
	fn.voice = function(){
		if(document.createElement('input').webkitSpeech !== undefined){
			//是否支持语音识别
			this.wrap('<div class="voice-div">').after('<input type="text" class="voice-text" lang="zh-CN" x-webkit-speech  x-webkit-grammar="builtin:search"/>');
			
			var _voice_input = this.parent('.voice-div').find('.voice-text').css({
				border: "none",
				color: "transparent",
				cursor : "pointer",
				width: function() {
					return $(this).css("font-size");
				}				 
			});//添加css
			_voice_input.attr('title','语音识别器');
			
			var _this = this;
			return _voice_input.bind('webkitspeechchange',function(e){
				return _this.attr('value',$(this).val());
			});
		}
		return null;
	};
}).call(this);

//example var speech = new Speech();
var Speech = function(opt){
	opt = opt || {};
	this.id = opt.id;
	var cb = opt.cb;
	var input = $('#' + this.id).voice();	
	
	
	this.getId = function(){
		return this.id;
	}
	
	var _value  = '';
	
	this.getValue = function(){
		return _value = input.val();
	}

	if(typeof cb == 'function'){
		//添加语音更改函数
		input.bind('webkitspeechchange',function(){
			cb.apply(this,arguments);
		});
	}
}

//example
var speech = new Speech({id:'myvoice',cb:function(){
	console.log($(this).val());
}});