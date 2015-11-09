let LikeMyController = function($scope) {
  $scope.likeNum = 0;
  $scope.word = 'Likes';

  $scope.addLike = function() {
    $scope.likeNum = $scope.likeNum + 1;
    if ($scope.likeNum === 1) {
      $scope.word = 'Like';
    } else {
      $scope.word = 'Likes';
    }

  };
};

LikeMyController.$inject = ['$scope'];

export default LikeMyController;