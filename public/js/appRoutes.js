angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/booking', {
			templateUrl: 'views/booking.html',
			controller: 'bookingCtrl'
		})
		.when('/cancel', {
			templateUrl: 'views/cancel.html',
			controller: 'CancelController'
		})
		.when('/movies', {
			templateUrl: 'views/movies.html',
			controller: 'MoviesController',
			resolve: {
			logincheck: checkLoggedin
			}
		})
		.when('/citi', {
			templateUrl: 'views/CITY.html',
			controller: 'CitiController',
			resolve: {
			logincheck: checkLoggedin
			}
		})
		.when('/Theater', {
			templateUrl: 'views/Theater.html',
			controller: 'ThieaterController',
			resolve: {
			logincheck: checkLoggedin
			}
		})
		.when('/seats', {
			templateUrl: 'views/seats.html',
			controller: 'SitController'
		})
		 .when('/payment', {
	 		templateUrl: 'views/payment.html',
		 	controller: 'PayController'
		 })
		 .when('/confirm', {
	 		templateUrl: 'views/confirm.html',
		 	controller: 'ConfirmController'
		 })
		.when('/Map', {
			templateUrl: 'views/Map.html',
			controller: 'mapcontroller',
			resolve: {
			logincheck: checkLoggedin
			}
		})
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'lctrl'
		})
		.when('/logout', {
			controller: 'LogoutController'
		})
		.when('/admin', {
			templateUrl: 'views/admin.html',
			controller: ''
		})
		.when('/register', {
			templateUrl: 'views/register.html',
			controller: 'rctrl'
		});
	$locationProvider.html5Mode(true);

}]);

var checkLoggedin = function($q, $timeout, $http, $location, $rootScope)
{
    var deferred = $q.defer();

    $http.get('/loggedin').success(function(user)
    {
        $rootScope.errorMessage = null;
        // User is Authenticated
        if (user !== '0')
            deferred.resolve();
        // User is Not Authenticated
        else
        {
            $rootScope.errorMessage = 'You need to log in.';
            deferred.reject();
            $location.url('/login');
        }
    });

    return deferred.promise;
};

// app.controller("NavCtrl", function($rootScope,$scope, $http, $location){
//   $scope.logout= function()
//   {
//      $http.post("/logout").success(function(){
//        $location.url('/home');
//      });
//   }
//
// });
