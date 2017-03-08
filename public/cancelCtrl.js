angular.module('CancelCtrl', []).controller('CancelController', function($scope,$http,$location,$rootScope) {
$scope.msg="";
var refresh = function () {
         $http.get('/booking/getbooking').success(function (response) {

            $scope.book = response;
            $scope.fire = "";
        });
  };
refresh();

  $scope.removeMovie = function(fire) {
  		//console.log(id);
  		$http.delete('/booking/deletebook/' + fire._id).success(function(response) {
  				console.log(response);
  				console.log('DELETED SUCCESSFULLY');
  				refresh();
  		});
};
  });
