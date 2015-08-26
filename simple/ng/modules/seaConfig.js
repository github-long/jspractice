/**
 * Created by work on 2015/8/10.
 */

seajs.config({
    base : "/practice",
    paths:{
        lib : "lib",
        simple : "simple"
    },
    alias:{
        "jquery" : "lib/jquery/jquery",
        "angular" : "lib/angular/angular.min.js",
        "dateFormat" : "simple/ng/modules/dateFormat.js",
        'testModule' : '/pratice/simple/ng/modules/testModule.js'
    }
});
seajs.use("simple/ng/modules/main");