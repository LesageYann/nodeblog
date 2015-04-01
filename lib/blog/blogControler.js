var blogAppControllers = angular.module('blogAppControllers', []);

blogAppControllers.controller('headCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    if ($routeParams.articleId == null){
      $scope.page={'title': 'blog',
	                'tag' : 'blog, accueil'};
	}else {
	 $scope.page={'title': $routeParams.articleId,
	                'tag' : ('article '+ $scope.page.title)};
    }
  }]);

blogAppControllers.controller('blogAppCtrl', ['$scope', '$http',
  function ($scope, $http) {
      $http.get('libs/blog/bdd/getbillet').success(function(data) {
      $scope.articles = data;
    });
  }]);

blogAppControllers.controller('blogAppDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.articleId = $routeParams.articleId;
  }]);