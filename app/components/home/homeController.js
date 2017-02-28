(function() {
    var HomeController = function($scope, homeService) {

        var posts = function(data) {
            $scope.Posts = data;
        };

        var sections = function(data) {
            $scope.Sections = data;
        };
        var errorDetails = function(serviceResp) {
            $scope.Error = "Something went wrong ??";
        };


        homeService.sections().then(sections, errorDetails);
        homeService.posts().then(posts, errorDetails);

        $scope.spaceEncode = function(string) {
            string = string.replace(/ /g, '-');
            return string;
        };
    };
    app.controller("HomeController", ["$scope", "homeService", HomeController]);
}());