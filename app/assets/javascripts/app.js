var app = angular.module("flapperNews", ['ui.router', 'templates']);

app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
	function($stateProvider, $urlRouterProvider, $httpProvider) {

		$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

	  $stateProvider
	    .state('home', {
	      url: '/home',
	      templateUrl: 'home/_home.html',
	      controller: 'MainCtrl',
	      resolve: {
				  postPromise: ['posts', function(posts){
				    return posts.getAll();
				  }]
				}
	    })
	    .state('post', {
	    	url: '/posts/{id}',
	    	templateUrl: 'posts/_post.html',
	    	controller: 'PostCtrl',
	    	resolve: {
	    		post: ['$stateParams', 'posts', function($stateParams, posts) {
				    return posts.get($stateParams.id);
				  }]
	    	}
	    });

  	$urlRouterProvider.otherwise('home');

	}]);
