angular.module('THEATER', []).controller('ThieaterController', function($scope, $http) {

    $scope.tagline = 'Enter Theater  here!';

    var refresh = function() {
      $http.get('/Cities/getCITY').success(function(response) {
        $scope.citiinfo=response;
      });
        $http.get('/theaterApi/getT').success(function(response) {
            console.log('READ IS SUCCESSFUL');
            $scope.tList = response;
            $scope.theaters= "";
        });
    };

    refresh();

    $scope.CitiMapping=function()
     {
        $http.get('/theaterApi/selectCity/'+$scope.mapping1.Theatercity).success(function (response) {
          $scope.citiData=response;
       });
          window.location.reload();
      };

    $scope.addT = function(theaters) {
      $http.post('/theaterApi/addT', theaters).success(function (response) {
                 console.log(response);
                 console.log("CREATE IS SUCCESSFUL");
                 refresh();

        });
      //  console.log($scope.contact); //undifined content

    };

    $scope.removeT = function(theaters) {
        //console.log(id);
        $http.delete('/theaterApi/deleteT/' + theaters._id).success(function(response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editT = function(theaters) {
        $http.get('/theaterApi/getT/' + theaters._id).success(function(response) {
            $scope.theaters = response[0];
        });
    };

    $scope.updateT = function() {
        console.log("REACHED UPDATE");
        console.log($scope.theaters._id);
        $http.put('/theaterApi/updateT/' + $scope.theaters._id, $scope.theaters).success(function(response) {
            console.log(response);
            refresh();
        })
    }

});
