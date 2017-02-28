(function() {
	var DetailsController = function($scope, detailsService, $stateParams) {

		var detailsPost = function(data) {
			$scope.DetailsPost = data;
		};

		detailsService.detailsPost($stateParams.itemId).then(detailsPost);

		//$scope.spaceEncode = function(string) {
		//	string = string.replace(/ /g, '-');
		//	return string;
		//};

	};
	app.controller("DetailsController", ["$scope", "detailsService", "$stateParams", DetailsController]);
}());