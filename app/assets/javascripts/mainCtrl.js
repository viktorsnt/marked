app.controller('MainCtrl', ['$scope', 'posts', 'Auth', function($scope, posts, Auth) {
  $scope.signedIn = Auth.isAuthenticated;
  $scope.posts = posts.posts;
  $scope.addPost = function() {
    if (!$scope.title || $scope.title === '') {
      return;
    }
    posts.create({
      title: $scope.title,
      link: $scope.link
    });
    $scope.title = '';
    $scope.link = '';
  };
  $scope.incrementUpvote = function(post) {
    posts.upvote(post);
  };
}]);