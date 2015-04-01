
var blogApp = angular.module('blogApp', [
  'ngRoute',
  'blogAppControllers'
]);

blogApp.controller('blogAppControllers', function ($scope) {
  $scope.articles = [
    {'title': 'Nexus S',
	 'date': '22.03.2015',
     'content': 'Fast just got faster with Nexus S.'},
    {'title': 'Nexus Sx',
	 'date': '22.03.2015',
     'content': 'Fast just got faster with Nexus S.'},
	 {'title': 'Nexus xxS',
	 'date': '22.03.2015',
     'content': 'Fast just got faster with Nexus S.'},
  ];
  $scope.page = [
    {'title': 'blog',
     'tag': 'blog'},
  ];
});

blogApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/blog', {
        templateUrl: '../../partials/blog.html',
        controller: 'blogAppCtrl'
      }).
      when('/blog/:articleId', {
        templateUrl: '../../partials/article-detail.html',
        controller: 'blogAppDetailControllers'
      }).
      otherwise({
        redirectTo: '/blog'
      });
  }]);