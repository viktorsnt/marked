app.controller('MainCtrl', ['$scope', 'posts', 'Auth', function($scope, posts, Auth) {
  $scope.signedIn = Auth.isAuthenticated;
  $scope.posts = posts.posts;

  $scope.addPost = function() {
    if (!$scope.link || $scope.link === '') {
      return;
    }
    posts.create({
      link: $scope.link
    });
    $scope.link = '';
  };

  $scope.incrementUpvote = function(post) {
    if ( $scope.signedIn() ) {
      posts.upvote(post);
    }
  };

}]);
