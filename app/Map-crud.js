
var express = require('express');
var router = express.Router();
bodyParser = require('body-parser'); //parses information from POST

var mongoose = require('mongoose');

var MAPSCHEMA = mongoose.Schema({
   MovieList:String,
   CityList:String,
   ThtrList:String,
   showTime:Array,
    Fromdate:String,
    Date:String,
 });

var MAP = mongoose.model('MAP',MAPSCHEMA,'MAPDB');

//Movie
router.get('/getMAP', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    MAP.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/getMAP/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     MAP.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });

});


router.get('/selectMovie/:t', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     MAP.find({ThtrList: req.params.t}, function (err, docs) {
       if(err){
         return res.send(err);
       }
         res.json(docs);
       });
});
router.get('/selectMname/:m',function(req, res) {
MAP.find({MovieList:req.params.m},function(err, Data) {
    if (err) {
      return res.send(err);
    }
    res.send(Data);
  });
});

router.get('/selectCity/:c',function(req, res) {
MAP.find({CityList:req.params.c},function(err, Data) {
    if (err) {
      return res.send(err);
    }
    res.send(Data);
  });
});



router.post('/addMap', function(req, res){

 console.log(req.body);



 var movielists=req.body.MovieList;
 var citilists=req.body.CityList;
 var thtrlists=req.body.ThtrList;
 var time=req.body.showTime;
 var fromdates=req.body.Fromdate;
  var todate=req.body.Date;

  var MAPDB = new  MAP({
    MovieList:movielists,
    CityList:citilists,
    ThtrList:thtrlists,
    showTime:time,
    Fromdate:fromdates,
    Date:todate,

  });

MAPDB.save(function(err, docs){
    if ( err ) throw err;
    console.log("MAP Saved Successfully");
    res.json(docs);
  });
});


router.put('/updateMAP/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    MAP.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      console.log(data);
      res.json(data);
    });
})



 router.delete('/deleteMAP/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      MAP.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
});



// catch 404 and forward to error handler
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
module.exports = router;
