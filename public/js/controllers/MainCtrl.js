// angular.module('MainCtrl', []).controller('MainController', function($scope,$http) {
//
// 	$scope.tagline = 'Welcome to movie booking website!';
//
// 	var refresh = function() {
// 			$http.get('/movie/getMovie').success(function(response) {
// 					console.log('READ IS SUCCESSFUL');
// 					$scope.moviList = response;
// 					$scope.movi = "";
// 					$scope.year = "";
// 			});
// 	};
//
// 	refresh();
// 	});

	angular.module('MainCtrl', []).controller('MainController', function($scope,$http,$location,$rootScope) {
		$scope.tagline = 'Book your movies here!';

		var refresh = function() {
				$http.get('/movie/getMovie').success(function(response) {
						console.log('READ IS SUCCESSFUL');
						$scope.moviList = response;
						$scope.movi = "";
						$scope.year = "";
						$scope.shows = true;
			 			$scope.details = false;
				});
		};

		refresh();

		$scope.refreshAll=function(){
		 refresh();
	};

		$scope.setData=function(){
		     $scope.shows = true;
			 $scope.details = false;
	};

		$scope.bookMovie=function(movi)
		{
			//$rootScope.movieName=m;
			sessionStorage.setItem('moviName',movi);
		// $location.path("/booking");
		};

$scope.searchbyGenre = function () {

         $http.get('/movie/searchbyGenre/' + $scope.myVar).success(function (response) {
             console.log(response);
             $scope.moviList = response;

            if(response.length==0)
            {
                $scope.msg="No Movie Found";
            }
            else
            {
                $scope.msg="";
            }

        });
    };
refresh();

	});
