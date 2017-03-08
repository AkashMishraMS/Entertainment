// 'use strict';

// angular.module('LogoutCtrl', []).controller('logoutCtrl', function($scope,$http,$rootScope,$location,$window) {

//     $scope.logout = function () {

//       // call logout from service
//       AuthService.logout($q)
//         .then(function () {
//           $location.path('/login');
//         });

//     };

// });

angular.module('LogoutCtrl', []).controller("LogoutController", function($scope, $http, $location){

  $scope.logout= function()
  {
     $http.post("/logout").success(function(){
       $location.url('/');
       alert('You are successfully logged out...');
     });
  }
});
