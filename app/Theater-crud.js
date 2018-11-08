
var express = require('express');
var router = express.Router();
bodyParser = require('body-parser'); //parses information from POST

var mongoose = require('mongoose');

var THEATERCHEMA = mongoose.Schema({
   TheaterNAME:String,
   Theatercity:String,
   Theaterlocation:String,
 });

var Theaterc = mongoose.model('Theaterc',THEATERCHEMA,'Tdb');


var Theaterbydefault = new Theaterc({TheaterNAME: 'City Pride',Theatercity:'Pune',Theaterlocation:'Swargate Pune'});
Theaterbydefault.save();

//Movie
router.get('/getT', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    Theaterc.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/getT/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Theaterc.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });

});

router.get('/selectCity/:c',function(req, res) {
Theaterc.find({Theatercity:req.params.c},function(err, Data) {
    if (err) {
      return res.send(err);
    }
    res.send(Data);
  });
});

router.post('/addT', function(req, res){

 console.log(req.body);
 console.log(req.body.TheaterNAME);


 var tname=req.body.TheaterNAME;
 var tcity=req.body.Theatercity;
 var tlocation=req.body.Theaterlocation;

  var Tdb = new  Theaterc({
    TheaterNAME:tname,
    Theatercity:tcity,
    Theaterlocation:tlocation,
  });

Tdb.save(function(err, docs){
    if ( err ) throw err;
    console.log("Book Saved Successfully");
    res.json(docs);
  });


  })

 router.delete('/deleteT/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Theaterc.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/updateT/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    Theaterc.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      console.log(data);
      res.json(data);
    });
})


// catch 404 and forward to error handler
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
