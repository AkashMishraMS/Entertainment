angular.module('BookingCtrl', []).controller('SitController', function($scope,$http,$rootScope,$location,$window) {
  $scope.seats = 'seats';



  $("#selectClass").on('change', function() {
  if ($(this).val() == "250") {
     $(".slrCls").attr("disabled", "disabled");
  } else {
     $(".slrCls").removeAttr("disabled");
  }
});



  $("#selectClass").on('change', function() {
    if ($(this).val() == "120") {
   $(".gldCls").attr("disabled", "disabled");
 } else {
   $(".gldCls").removeAttr("disabled");
 }

  });





  // $('.calculate').change(function(){
  //     var group = parseInt($('#selectClass').val());
  //     var price = parseInt($('#selectSeats').val());
  //     var total = group * price;
  //     $('#total').val( total);
  // });




    var selectSeats = document.getElementById('selectSeats');
    $('input[type=checkbox]').on('change', function (e) {
    if ($('input[type=checkbox]:checked').length > selectSeats.value ) {
        $(this).prop('checked', false);
        alert("WANT MORE..? INCREASE NO. OF SEATS");
        return;
    }
});




        $('select[id="selectClass"]').change(function(){
            var text = $(this).find("option:selected").text();
            if(text != ""){
              text = "Buy"+text;
            }

            $('#seatCls').val(text);

          });


 //
 //          function updateTextArea() {
 //     var allVals = [];
 //     $('#gold :checked').each(function() {
 //       allVals.push($(this).val());
 //     });
 //     $('#noOFSeats').val(allVals);
 //  }
 // $(function() {
 //   $('#gold input').click(updateTextArea);
 //   updateTextArea();
 // });


 var elems = $('[id^="chk"]');

 elems.on('change', function() {
     $('#noOFSeats').val(
         elems.filter(':checked').map(function() {
             return this.value;
         }).get().join(",")
     );
 });









//  function updateTextArea() {
// var allVals = [];
// $('.rowB :checked').each(function() {
// allVals.push($(this).val());
// });
// $('#noOFSeats').val(allVals);
// }
// $(function() {
// $('.rowB input').click(updateTextArea);
// updateTextArea();
// });


          // $('select[class="selectClass"]').change(function(){
          //    var value=$(this).find("option:selected").val();
          //   alert(value)
          // });
          //
          // $('select[class="selectSeats"]').change(function(){
          //     var seat=$(this).find("option:selected").val();
          //
          // });


          // var total= value*seat;
          // $('#total').val(total);

          $('.calculate').change(function(){
    var group = parseInt($('.selectpicker.selectClass').val());
    var price = parseInt($('.selectpicker.selectSeats').val());
    var total = group * price;
    if(isNaN(total)){
  $('#totalAmount').val('');
} else{
  $('#totalAmount').val('Rs' + total+ "/-");
}

});

$scope.setShow=function(){
    var a= document.getElementById('seatCls').value;
    var b = document.getElementById('noOFSeats').value;
    var c = document.getElementById('totalAmount').value;
    if (a==0 || b==0|| c==0) {
      alert('you missed something');
      $location.url('/seats');
      return false;

    }
  sessionStorage.setItem('cls', document.getElementById('seatCls').value );
  sessionStorage.setItem('nOfS', document.getElementById('noOFSeats').value );
  sessionStorage.setItem('Amt', document.getElementById('totalAmount').value );
  // $location.('/payment');
}
});
