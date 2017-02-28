app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {

	$locationProvider.html5Mode(true);
	$urlMatcherFactoryProvider.caseInsensitive(true);
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'app/components/home/homeView.html',
			controller: 'HomeController'
		})
		.state('section', {
			url: '/tutorials/:sId/:sectionTitle',
			templateUrl: 'app/components/section/sectionView.html',
			controller: 'SectionController'
		})
		.state('details', {
			url: '/:sectionName/:itemId/:postTitle',
			templateUrl: 'app/components/details/detailsView.html',
			controller: 'DetailsController'
		})
		.state('allpost', {
			url: '/all-articles',
			templateUrl: 'app/components/allpost/allpostView.html',
			controller: 'AllPostController'
		})
		.state('contact', {
			url: '/contact',
			template: ''
		});


});