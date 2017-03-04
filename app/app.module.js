var app = angular.module('TechnologyModule', ['ui.router', 'textAngular', 'ui.bootstrap']);


var serviceBase = 'http://localhost:12050/';

//var serviceBase = 'http://technology.somee.com/';

//var serviceBase = 'http://abinhasan-001-site1.ctempurl.com/';

app.constant('ngAuthSettings', {
	apiServiceBaseUri: serviceBase
});