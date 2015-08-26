define(function(require, exports, module){
	require("jquery");
	var test = require("./mymodule");
	
//	test.seyHello();
//	test.run("my message");
//	test.testGet()

	alert(test.builtUrl());
});