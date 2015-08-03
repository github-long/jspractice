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
		}
	};
	
	module.exports = test;
	
});