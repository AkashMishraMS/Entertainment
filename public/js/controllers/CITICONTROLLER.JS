angular.module('CITICONTROLLER', []).controller('CitiController', function($scope, $http) {

    $scope.tagline = 'Enter City  here!';

    var refresh = function() {
        $http.get('/Cities/getCITY').success(function(response) {
            console.log('READ IS SUCCESSFUL');
            $scope.cityList = response;
            $scope.CITEE= "";
        });
    };

    refresh();

    $scope.addCITY = function(CITEE) {
      $http.post('/Cities/addCITY', CITEE).success(function (response) {
                 console.log(response);
                 console.log("CREATE IS SUCCESSFUL");
                 refresh();

        });
      //  console.log($scope.contact); //undifined content

    };

    $scope.removeCity = function(CITEE) {
        //console.log(id);
        $http.delete('/Cities/deleteCITY/' + CITEE._id).success(function(response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editCity = function(CITEE) {
        $http.get('/Cities/getCITY/' + CITEE._id).success(function(response) {
            $scope.CITEE = response[0];
        });
    };

    $scope.updateCITY = function() {
        console.log("REACHED UPDATE");
        console.log($scope.CITEE._id);
        $http.put('/Cities/updateCITY/' + $scope.CITEE._id, $scope.CITEE).success(function(response) {
            console.log(response);
            refresh();
        })
    }

});
