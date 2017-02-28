(function() {
	var AllPostController = function($scope, allpostService) {

		var posts = function(data) {
			$scope.Posts = data;
	
			$scope.totalItems = $scope.Posts.length;
			$scope.currentPage = 1;
			$scope.itemsPerPage = 10;
			$scope.maxSize = 5; //Number of pager buttons to show

		};

		var errorDetails = function(serviceResp) {
			$scope.Error = "Something went wrong ??";
		};

		allpostService.posts().then(posts, errorDetails);

		$scope.spaceEncode = function(string) {
			string = string.replace(/ /g, '-');
			return string;
		};
	};

	app.controller("AllPostController", ["$scope", "allpostService", AllPostController]);
}());