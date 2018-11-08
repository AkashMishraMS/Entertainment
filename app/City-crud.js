
var express = require('express');
var router = express.Router();
bodyParser = require('body-parser'); //parses information from POST

var mongoose = require('mongoose');

var CITISCHEMA = mongoose.Schema({
   CITYNAME:String,
 });

var CITIS = mongoose.model('CITIS',CITISCHEMA,'CITIDB');


 var citibydefault = new CITIS({CITYNAME: 'Pune'});
// var student = new UserModel({username: 'bob', password: 'bob', firstNmae:"Bob", lastName:"Marley", roles:["student"] });
//
citibydefault.save();
// student.save();
//Movie
router.get('/getCITY', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    CITIS.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/getCITY/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     CITIS.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });

});

router.post('/addCITY', function(req, res){

 console.log(req.body);


 var name=req.body.CITYNAME;
  var CITIDB = new  CITIS({
    CITYNAME:name,
  });

CITIDB.save(function(err, docs){
    if ( err ) throw err;
    console.log("Book Saved Successfully");
    res.json(docs);
  });


  })

 router.delete('/deleteCITY/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      CITIS.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/updateCITY/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    CITIS.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
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
