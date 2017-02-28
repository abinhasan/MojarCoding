(function() {
    var allpostService = function($http, ngAuthSettings) {

        var serviceBase = ngAuthSettings.apiServiceBaseUri;
        var count = 1000;

        var posts = function() {
            return $http.get(serviceBase + "api/post/GetAllPosts/" + count)
                .then(function(serviceResp) {
                    return serviceResp.data;
                });
        };

        return {
            posts: posts
        };
    };
    var module = angular.module("TechnologyModule");
    module.factory("allpostService", ["$http", "ngAuthSettings", allpostService]);
}());