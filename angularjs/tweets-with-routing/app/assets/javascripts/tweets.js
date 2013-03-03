app = angular.module('tweets', ['ngResource']);

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "/assets/tweets.html"
    })
});

app.factory('TweetService', function($resource) {
  return $resource('/tweets/:id', {id: "@id"}, {
    delete: {method: 'DELETE'}
  });
});

app.controller('TweetCtrl', function($scope, TweetService) {
  $scope.remaining = function(body) {
    return 140 - body.length;
  };

  $scope.tweets = TweetService.query();

  $scope.insertTweet = function() {
    TweetService.save($scope.newTweet, function(tweet) {
      $scope.tweets.unshift(tweet);
      $scope.newTweet = {};
    });
  };

  $scope.removeTweet = function(id, index) {
    TweetService.delete({id: id}, function(data) {
      $scope.tweets.splice(index, 1);
      $scope.loadMore(1);
    });
  };
});
