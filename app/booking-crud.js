
var express = require('express');
var router = express.Router();
bodyParser = require('body-parser'); //parses information from POST

var mongoose = require('mongoose');

var BOOKSCHEMA = mongoose.Schema({
   bookingid:String,
   name:String,
   phno:String,
   cardno:String,
   email:String
 });

var Booking = mongoose.model('Booking',BOOKSCHEMA,'booking');

//Movie
router.get('/getbooking', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    Booking.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/getbooking/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Booking.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });

});

router.post('/addBooking', function(req, res){

 console.log(req.body);


 var BookingID=req.body.bookingid;
 var Name=req.body.name;
 var PHNO=req.body.phno;
 var Email=req.body.email;
 var CARDNO=req.body.cardno;

  var booking = new  Booking({
    bookingid:BookingID,
    name:Name,
    phno:PHNO,
    email:Email,
    cardno:CARDNO
  });

booking.save(function(err, docs){
    if ( err ) throw err;
    console.log("Book Saved Successfully");
    res.json(docs);
  });
})

 router.delete('/deletebook/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
    Booking.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

// catch 404 and forward to error handler
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
