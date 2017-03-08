
angular.module('LCTRL', []).controller('lctrl', function($scope,$http,$location,$rootScope) {

  $scope.login= function (user){

    console.log(user);
    $http.post('/login' , user).success(function(response){

      console.log(response);
      $rootScope.currentUser = user;
     $location.path("/admin");
    });

  };

});
