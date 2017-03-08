angular.module('MoviesCtrl', []).controller('MoviesController', function($scope, $http,$rootScope,$location) {

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

$scope.setData=function(){
             $scope.shows = true;
             $scope.details = false;
    };

    $scope.searchMovie = function(){
  $http.get('http://www.omdbapi.com/?t='+$scope.name+'&y='+$scope.year+'&plot=short&r=json').success(function (response) {
    $scope.movi=response;
if(!$scope.movi.Title)
alert('ERROR : No movie found .');
});
refresh();
};
refresh();

$scope.addMovie = function(movi) {
$http.get('/movie/movieExist/'+ $scope.movi.imdbID).success(function (response) {
var currCount = response.length;
if( currCount == 0 )
{
$http.post('/movie/addMovie', $scope.movi).success(function (response) {
});
alert('Movie Saved Successfully');
refresh();
}
else
{
alert('Movie Already Exists');
refresh();
}
});
refresh();
};

    $scope.removeMovie = function(movie) {
        //console.log(id);
        $http.delete('/movie/deleteMovie/' + movie._id).success(function(response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editMovie = function(movie) {
        $http.get('/movie/getMovie/' + movie._id).success(function(response) {
            $scope.movi = response[0];
        });
    };

    $scope.updateMovie = function() {
        console.log("REACHED UPDATE");
        console.log($scope.movi._id);
        $http.put('/movie/updateMovie/' + $scope.movi._id, $scope.movi).success(function(response) {
            console.log(response);
            refresh();
        })
    }

    // $scope.bookMovie = function(movie){
    //     	$rootScope.selectedmovie = movie;
    //     	$location.path('/booking');
    //     }


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

});
