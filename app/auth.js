var cookieParser = require('cookie-parser');
var session      = require('express-session');
var express = require('express');
var router = express.Router();
bodyParser = require('body-parser'),


router.use(bodyParser.urlencoded({ extended: true }))


var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

router.use(session({ secret: 'this is secret'}));
router.use(cookieParser());
router.use(passport.initialize());
router.use(passport.session());

var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    username: String,
    password:String,
    email: String,
    firstNmae: String,
    lastName: String,
    roles:[String]

 });

var UserModel = mongoose.model('UserModel', UserSchema);

// var admin = new UserModel({username: 'alice', password: 'alice', firstNmae:"Alice", lastName:"Wonderland", roles:["admin"] });
// var student = new UserModel({username: 'bob', password: 'bob', firstNmae:"Bob", lastName:"Marley", roles:["student"] });
//
// admin.save();
// student.save();

passport.use(new LocalStrategy(
        function(username, password, done)
        {
          UserModel.findOne({username: username, password:password } , function(err, user){
              if (user)
              {
                return done(null, user);

              }
              return done(null, false, {message: 'unable to login'});


          });


        }));

passport.serializeUser(function(user, done){
  done(null, user);
});

passport.deserializeUser(function(user, done){
    done(null, user);
});

router.post("/login", passport.authenticate('local'), function(req, res){
  console.log('login');
  console.log(req.user);
  res.json(req.user);

});

router.post("/logout",  function(req, res){
  req.logout();
  res.send(200);

});


router.get("/loggedin", function(req, res){
   res.send(req.isAuthenticated() ? req.user : '0');

});


router.post("/register", function(req, res){
    UserModel.findOne({username: req.body.username}, function(err, user){

    if(user)
    {
      res.json(null);
      return;
    }
    else {
      var newUser = new UserModel(req.body);
      newUser.roles= ['student'];
      newUser.save(function(err, user)
      {
        req.login(user, function(err)
        {
          if(err) {return next(err);}
          res.json(user);
        });
      });
    }
    });
});

module.exports = router;
