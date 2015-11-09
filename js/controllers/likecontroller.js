let LikeMyController = function() {
  $scope.Like.lText = 'Likes';

  function Like (obj) {
    this.lText = obj.s;
    this.array =obj.a;
  }

  $scope.addLike = function(x) {
    console.log(Like);
    if(Like.array.length === 0){
      x.s = 'Like';
      x.a.push(1);
    } else {
      x.s = 'Likes';
      x.a.push(1);
    }
    let like = new Like(x);
  };
};

LikeMyController.$inject = ['$scope'];

export default LikeMyController;