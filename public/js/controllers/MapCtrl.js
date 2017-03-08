//module.exports = function($scope, $http){

angular.module('MAPCONTROLLER', []).controller('mapcontroller', function($scope, $http) {

    $scope.tagline = 'Book your movies here!';

    $scope.booking = 'booking';

//     $(document).ready(function(){
//         $("#myDate").datepicker({ dateFormat: 'dd, M yy' });
//        $("#add").click(function () {
//           var text=($("#hh").val())+" : "+($("#mm").val())+" "+($("#t").val());
// $('#res').append("<option value='"+text+"'>"+text+"</option>");
//      });
//    });

    var refresh = function() {
      $http.get('/movie/getMovie').success(function(response) {
        $scope.Movieinfo=response;
      });
      $http.get('/Cities/getCITY').success(function(response) {
        $scope.citiinfo=response;
      });
      $http.get('/theaterApi/getT').success(function(response) {
        $scope.Theaterinfo=response;
      });
     $http.get('/mapingapi/getMap').success(function(response) {
            //console.log('READ IS SUCCESSFUL');
      $scope.MappingInfo = response;
      $scope.map="";
        });
    };
  refresh();

  $scope.addMap = function(){
    // var arr=[];
    // var length = $('#res').children('option').length;
    // for(var i=0;i<length;i++)
    // {
    //   arr[i]=$('#res option').eq(i).val();
    // }
    $scope.mapping.showTime=arr=$('#time').val();
    $scope.mapping.Fromdate=$('#myDate').val();
    $scope.mapping.Date=$('#Date').val();
    $http.post('/mapingapi/addMap', $scope.mapping).success(function (response) {
    });
refresh();
    var val='true';
   $http.put('/movie/updateMAPmovie/' + $scope.mapping.MovieList+'/'+val).success(function (response) {
        console.log(response);
      });
      alert('Mapping Saved Successfully');
        refresh();
    $scope.mapping='';
    refresh();
  };
  refresh();

  //   $scope.CitiMapping=function()
  //  {
  //     $http.get('/mapingapi/selectCity/'+$scope.mapping1.CityList).success(function (response) {
  //       $scope.citiData=response;
  //    });
  //       window.location.reload();
  //   };
  $scope.DetailMapping=function()
  {
    $http.get('/mapingapi/selectMovie/'+$scope.mapping1.ThtrList).success(function (response) {
      $scope.searchmovieData=response;
    });
      window.location.reload();
  };
  // $scope.MovieMapping=function()
  // {
  //   $http.get('/mapingapi/selectMname/'+$scope.mapping1.MovieList).success(function (response) {
  //     $scope.MovieS=response;
  //   });
  //     window.location.reload();
  // };

  $scope.editMAP = function(map) {
      $http.get('/mapingapi/getMap/' + map._id).success(function(response) {
          $scope.map = response[0];
      });
  };

  $scope.updateMAP = function() {
      console.log("REACHED UPDATE");
    //  console.log($scope.map._id);
      $http.put('/mapingapi/updateMAP/' + $scope.map._id, $scope.map).success(function(response) {
          console.log(response);
          refresh();
      })
  }


//   $scope.deleteMAP = function(map) {
//       //console.log(id);
//       $http.delete('/mapingapi/deleteMAP/' + map._id).success(function(response) {
//           console.log(response);
//           console.log('DELETED SUCCESSFULLY');
// });
// $http.get('/mapingapi/selectMname/'+map.MovieList).success(function (response) {
//         len=response.length;
//        if(len==0)
//        {
// var val='false';
//        $http.put('/movie/updateMAPmovie/' + $scope.map.MovieList+'/'+val).success(function (response) {
//             console.log(response);
//           });
//         }
//           alert('Mapping deleted Successfully');
//         });
//             refresh();
//   };
//
// });

   $scope.deleteMap = function(map) {
     //console.log(id);
     var x=confirm("Are you sure you want to delete ?");
    if(x){
     $http.delete('/mapingapi/deleteMAP/'+map._id).success(function (response) {
       refresh();
    });
     refresh();
    // $http.get('/mapingapi/getMAP').success(function (response) {
    //    $scope.MappingInfo=response;
    // });
    $http.get('/mapingapi/selectMname/'+map.MovieList).success(function (response) {
       len=response.length;
       if(len==0)
       {
        var val='false';
    $http.put('/movie/updateMAPmovie/'+map.MovieList+'/'+val).success(function (response) {
            });
      }
      alert('Mapping removed Successfully');
     });
  }
    refresh();
   };
   refresh();
});
