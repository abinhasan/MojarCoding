var app = angular.module('TechnologyModule', ['ui.router', 'textAngular', 'ui.bootstrap']);


var serviceBase = 'http://localhost:12050/';

//var serviceBase = 'http://technology.somee.com/';

app.constant('ngAuthSettings', {
	apiServiceBaseUri: serviceBase
});