var App = {
	init: function(){
		App.loadXML(function(response){
			canvasManager.init();
		});
	},

	loadXML: function(callback){
		var xHttp = new XMLHttpRequest();

		xHttp.open('GET', 'fireworks.xml', false);
		xHttp.send();

		var response = xHttp.responseXML;
		
		if(callback != undefined){
			callback(response);
		}
	},
};

(function(){
	App.init();
})();