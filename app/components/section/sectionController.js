(function() {
	var SectionController = function($scope, $stateParams, sectionService) {

		var sectionPosts = function(data) {
			$scope.SectionPosts = data;

			$scope.totalItems = $scope.SectionPosts.length;
			$scope.currentPage = 1;
			$scope.itemsPerPage = 10;
			$scope.maxSize = 5; //Number of pager buttons to show

		};

		$scope.sName = $stateParams.sectionTitle;

		sectionService.sectionPosts($stateParams.sId).then(sectionPosts);

		$scope.spaceEncode = function (string) {
		    string = string.replace(/ /g, '-');
		    return string;
		};


	};
	app.controller("SectionController", ["$scope", "$stateParams", "sectionService", SectionController]);
}());