(function() {
    var detailsService = function($http, ngAuthSettings) {

        var serviceBase = ngAuthSettings.apiServiceBaseUri;

        var detailsPost = function(postId) {
            return $http.get(serviceBase + "api/post/PostDetails/" + postId)
                .then(function(serviceResp) {
                    return serviceResp.data;
                });
        };

        return {
            detailsPost: detailsPost
        };
    };

    var module = angular.module("TechnologyModule");
    module.factory("detailsService", ["$http", "ngAuthSettings", detailsService]);
}());