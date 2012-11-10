// JavaScript Document
var Matching = (function(){
	
	
	var init = function(){
		
	}
	
	
	return {
		init:init
	}
})();

var DataBase = (function(){
				   
	var ajax = function(args,cb){
		var url = '';
		var urls = [];
		
		for(var i in args){
			urls.push(i + '=' + args[i]);
		}
		
		var url = '/command?' + urls.join('&');
		
		$.get(url,function(data){
			if(typeof cb == 'function'){
				cb(data);
			}
		});
	}

	var createUser = function(opt,cb){
		opt = opt || {};
		opt.opt = 'new_user';
		ajax(opt,cb);
	}
	
	var getRecCloth = function(opt,cb){
		opt = opt || {};
		opt.opt = 'get_rec_cloth';
		ajax(opt,cb);
	}
	
	var collectCloth = function(opt,cb){
		opt = opt || {};
		opt.opt = 'collect_cloth';
		ajax(opt,cb);
	}
	
	var getColCloth = function(opt,cb){
		opt = opt || {};
		opt.opt = 'get_col_cloth';
		ajax(opt,cb);
	}
	
	var shareCloth = function(opt,cb){
		opt = opt || {};
		opt.opt = 'share_cloth';
		ajax(opt,cb);
	}
	
	var getComment = function(opt,cb){
		opt = opt || {};
		opt.opt = 'get_comment';
		ajax(opt,cb);
	}
	
	return {
		createUser : createUser,
		getRecCloth : getRecCloth,
		collectCloth : collectCloth,
		getColCloth : getColCloth,
		shareCloth : shareCloth,
		getComment : getComment
	}
})();
DataBase.createUser({'sex':'0','height':'111','width':50,'age':25},function(){
																
});
DataBase.getRecCloth({'user_id':'0','page':'111'},function(){
																
});
DataBase.collectCloth({'user_id':'0','cloth_id':'111'},function(){
																
});
DataBase.getColCloth({'user_id':'0'},function(){
																
});
DataBase.shareCloth({'user_id':'0','col_id':'111'},function(){
																
});
DataBase.getComment({'user_id':'1100','col_id':'1234'},function(){
																
});