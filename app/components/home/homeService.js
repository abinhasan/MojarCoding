(function() {
    var homeService = function($http, ngAuthSettings) {

        var serviceBase = ngAuthSettings.apiServiceBaseUri;
        var count = 10;
        var posts = function() {
            return $http.get(serviceBase + "api/post/GetAllPosts/" + count)
                .then(function(serviceResp) {
                    return serviceResp.data;
                });
        };

        var sections = function() {
            return $http.get(serviceBase + "/api/section/GetAllSectionsByLimit/" + 10)
                .then(function(serviceResp) {
                    return serviceResp.data;
                });
        };

        return {
            posts: posts,
            sections: sections
        };
    };
    var module = angular.module("TechnologyModule");
    module.factory("homeService", ["$http", "ngAuthSettings", homeService]);
}());