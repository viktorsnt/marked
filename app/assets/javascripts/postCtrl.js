app.controller('PostCtrl', ['$scope', 'posts', 'post', function($scope, posts, post) {

  $scope.post = post;

  $scope.incrementUpvotes = function(comment) {
    comment.upvotes += 1;
  };
  
  $scope.addComment = function() {
    if (!$scope.body || $scope.body === '') {
      return;
    }
    $scope.post.comments.push({
      author: 'user',
      body: $scope.body,
      upvotes: 0
    });
    $scope.body = '';
  }

}]);