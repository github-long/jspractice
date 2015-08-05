define(function(require, exports, module){
	require("jquery");
	var test = require("./mymodule");
	
//	test.seyHello();
//	test.run("my message");
//	test.testGet()
	var elem = $("div");
	alert(elem.length);

	alert(test.builtUrl());
});