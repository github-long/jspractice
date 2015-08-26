define(function(require, exports, module){
	require("jquery");
	var test = {
		seyHello: function () {
			$("#content").html("sdaf");
		},
		run: function (msg) {
			alert(msg);
		},
		testGet: function () {
			$.get("http://lcoasdf.html", function (data) {
				alert(data);
			}).fail(function () {
				alert("fail");
			});
		},
		builtUrl : function(){
			var url = "";
			with(location){
				url = href;
			}
			return url;
		}
	};

	module.exports = test;
	
});