'use strict';
angular.module('ConfirmCtrl', []).controller('ConfirmController', function($scope,$http,$location,$rootScope) {

var ref=function(){
  $http.get('/mapping/getmapping').success(function(response){
    $scope.mapping=response;
  });
  };

  var refresh = function () {
           $http.get('/booking/getbooking').success(function (response) {

              $scope.book = response;
              $scope.fire = "";
          });
    };
  refresh();

alert("Movie Booked successfully");

console.log("i am in cctrl");
var city=sessionStorage.getItem('CityList');
var Theater=sessionStorage.getItem('ThtrList');
var date=sessionStorage.getItem('Fromdate');
var show=sessionStorage.getItem('Show');
  var a= sessionStorage.getItem('cls');
  var c= sessionStorage.getItem('nOfS');
  var f= sessionStorage.getItem('Amt');

console.log("i am in cctrl");
  document.getElementById('cls').innerHTML=a;
  document.getElementById('nOfS').innerHTML=c;
  document.getElementById('Amt').innerHTML=f;
  document.getElementById('CityList').innerHTML= city;
    document.getElementById('ThtrList').innerHTML= Theater;
      document.getElementById('Date').innerHTML= date;
        document.getElementById('Show').innerHTML= show;


});
