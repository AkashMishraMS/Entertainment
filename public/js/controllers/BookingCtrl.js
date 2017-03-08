angular.module('SitCtrl', []).controller('bookingCtrl', function($scope,$http,$rootScope,$location,$window) {

	$scope.tagline = 'Book your movies here!';

	var refresh=function(){
 	 $http.get('/mapingapi/getMap').success(function(response) {
 		$scope.MappingInfo = response;
 			});
  }
 refresh();

 var show = function(){
 var data = sessionStorage.getItem('moviName');
 $http.get('/mapingapi/selectMname/'+ data).success(function(response){
 	console.log("get resp");

	$scope.Mbooking=response;
 	console.log("get resp");
 });

 	$http.get('/movie/moviPoster/'+ data).success(function(response){
 		$rootScope.movi=response;
 		sessionStorage.setItem('moviPoster',$rootScope.movi);
 	});

 };
 show();

 $scope.MDates=[];
 var GDates=function() {
 for(i=0;i<6;i++)
 {
 var date=new Date();
 date.setDate(date.getDate()+i);
 $scope.MDates[i]=date;
 }
 };
 GDates();

 $scope.setShow=function(a,b,c,d)
 {
 $rootScope.movieShow=a;
 sessionStorage.setItem('Show',$rootScope.movieShow);
 sessionStorage.setItem('ThtrList',b);
 sessionStorage.setItem('Fromdate',c);
 sessionStorage.setItem('CityList',d);
 // sessionStorage.setItem('showTime',e);

 $location.path("/seats");
 };

 });



//  var refresh=function(){
// 	 $http.get('/mapingapi/getMap').success(function(response) {
// 		$scope.MappingInfo = response;
// 		$scope.mapb="";
// 			});
//  }
// refresh();
//
// 	$scope.bookmovie=function(){
// 		var data=sessionStorage.getItem('moviName');
// $http.get('/mapingapi/selectMname/'+data).success(function (response) {
// $scope.MapMovieName=response;
// });
// $http.get('/movie/moviPoster/'+data).success(function(response) {
// 			//console.log('READ IS SUCCESSFUL');
// 			$rootScope.movi=response;
// 			sessionStorage.setItem('movi',$rootScope.movi);
// 		});
// bookmovie();
// 	};
//
//
// $scope.moviDates=[];
// var MDate=function(){
// 	for(i=0;i<6;i++)
// 	{
// 		var date=new Date();
// 		date.setDate(date.getDate()+i);
// 		$scope.moviDates[i]=date;
// 	}
// };
// MDate();
//
// $scope.setShow=function(a,b,c,d)
// {
//   $rootScope.movieShow=a;
//   sessionStorage.setItem('movieShow',$rootScope.movieShow);
//   sessionStorage.setItem('movieTheatre',b);
//   sessionStorage.setItem('movieDate',c);
//   sessionStorage.setItem('movieCity',d);
//   $location.path("/seats");
//   };
//
// });








//  $scope.movimaped=$rootScope.selectedmovie;
//
// console.log("hello");
//
// var refresh=function() {
// 	   var promise1 = new Promise(function(resolve,reject){
// 		var mapedmovie=$http.get('/mapingapi/getMap').success(function(response){});
// 		mapedmovie.then(function(data){
// 			$scope.mappinglist=data;
// 			resolve(data);
// 		});
//
// });
// refresh();
// }
//
// var promise2=promise1.then(function(mapedmovie){
// 	var shtime=$http.get('/mapingapi/getMap').success(function(response) {
// 	 $scope.MappingInfo = response;
// 	 $scope.map="";
// 	});
// 	shtime.then(function(shtime){
//
// var theater=[];
// for(let mapm of mapedmovie){
// 	var thtrobj={};
// 	if(mapm.MovieList==$scope.mapedmovie.moviTitle && mapm.CityList==$scope.city){
// 		thtrobj.theater=mapm.ThtrList;
// 		thtrobj.Fromdate=mapm.Fromdate;
// 		thtrobj.todate=mapm.Date;
// 		thtrobj.movie=mapm.MovieList;
// 		theater.push(thtrobj);
//
// 	};
// }
// $scope.tlist=theater;
//
// 	});
// });
