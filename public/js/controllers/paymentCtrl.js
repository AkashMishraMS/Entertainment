angular.module('PayCtrl', []).controller('PayController', function($scope,$http,$location,$rootScope) {

	$scope.tagline = 'Book your movies here!';

	// $scope.getNumber = function() {
  //                $scope.num = (Math.ceil(Math.random() * 1000000)+1);
  //            };

	var refresh = function () {
	         $http.get('/booking/getbooking').success(function (response) {

	            $scope.book = response;
	            $scope.fire = "";
	        });
		};
refresh();

			 $scope.bookTicket=function(a){
  $scope.bookingid1=(Math.ceil(Math.random() * 100000000000000)+1);

  $scope.bookingid=$scope.bookingid1;
  $scope.msg=$scope.name+"your Booking id is"+$scope.bookingid+"phno"+$scope.phno+"email"+$scope.email;
  var bookingObj={};
  bookingObj['bookingid']=$scope.bookingid1;
  bookingObj['name']=$scope.name;
	bookingObj['phno']=$scope.phno;
	bookingObj['email']=$scope.email;

	// $(#rno).val('');

	$rootScope.bookingObj=a;
	sessionStorage.setItem('bookingid',$rootScope.bookingObj);

$http.post('/booking/addBooking/',bookingObj).success(function(response){

  console.log(response);
  console.log("Bookig id is successfully stored");
	refresh();
    $location.path('/confirm');
});
};
refresh();

// $scope.removeMovie = function(fire) {
// 		//console.log(id);
// 		$http.delete('/booking/deletebook/' + fire._id).success(function(response) {
// 				console.log(response);
// 				console.log('DELETED SUCCESSFULLY');
// 				refresh();
// 		});
// };
});


// });
