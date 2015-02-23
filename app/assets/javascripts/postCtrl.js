app.controller('PostCtrl', ['$scope', 'posts', 'post', 'Auth', function($scope, posts, post, Auth) {
  
  $scope.signedIn = Auth.isAuthenticated;

  $scope.post = post;

  $scope.incrementUpvotes = function(comment) {
    if ($scope.signedIn()) {
      posts.upvoteComment($scope.post, comment);
    }
  };
  
  $scope.addComment = function() {
    if (!$scope.body || $scope.body === '') {
      return;
    }
    posts.addComment(post.id, {
      body: $scope.body
      // author: 'user'
    }).success( function(comment) {
      $scope.post.comments.push(comment);
      $scope.body = '';
    });
  }

}]);