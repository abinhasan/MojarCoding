(function() {
    var sectionService = function($http, ngAuthSettings) {

        var serviceBase = ngAuthSettings.apiServiceBaseUri;

        var sectionPosts = function(sectionId) {
            return $http.get(serviceBase + "api/post/GetSectionPost/" + sectionId)
                .then(function(serviceResp) {
                    return serviceResp.data;
                });
        };

        return {
            sectionPosts: sectionPosts
        };
    };

    var module = angular.module("TechnologyModule");
    module.factory("sectionService", ["$http", "ngAuthSettings", sectionService]);
}());