
var blogApp = angular.module('blogApp', [
  'ngRoute',
  'blogAppControllers'
]);

blogApp.controller('blogAppControllers', function ($scope) {
  $scope.article = [
    {'title': 'Nexus S',
	 'date': '22.03.2015'
     'content': 'Fast just got faster with Nexus S.'},
    {'title': 'Nexus Sx',
	 'date': '22.03.2015'
     'content': 'Fast just got faster with Nexus S.'},
	 {'title': 'Nexus xxS',
	 'date': '22.03.2015'
     'content': 'Fast just got faster with Nexus S.'},
  ];
  $scope.page = [
    {'title': 'blog',
     'tag': 'blog'},
  ];
});

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/blog', {
        templateUrl: 'partials/blog.html',
        controller: 'blogAppControllers'
      }).
      when('/blog/:articleId', {
        templateUrl: 'partials/article-detail.html',
        controller: 'blogAppDetailControllers'
      }).
      otherwise({
        redirectTo: '/blog'
      });
  }]);