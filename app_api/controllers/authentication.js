var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.register = function(req, res) {

  // if(!req.body.name || !req.body.email || !req.body.password) {
  //   sendJSONresponse(res, 400, {
  //     "message": "All fields required"
  //   });
  //   return;
  // }

  var user = new User();

  user.name = req.body.name;
  user.email = req.body.email;

  user.setPassword(req.body.password);

  user.save(function(err) {
    // var token;
    // token = user.generateJwt();
    res.status(200);
    res.json({
      "msg" : "Success"
    });
  });

};

module.exports.changePassword = function(req, res) {
  User.findOne({ "email": req.body.email}, function (err, user){
    if (err) {
      res.status(404).json(err);
      return;
    }
    if (user) {
      if(user.validPassword(req.body.password)) {
        user.setPassword(req.body.newpassword);
        user.save();
        res.status(200);
        res.json({
          "msg" : "Successfully Changed Password"
        });
        return;
      } else {
        // res.status(200);
        res.json({
          "msg" : "Current Password is incorrect"
        })
        return;
      }
    } else {
      // res.status(200);
      res.json({
        "msg" : "Current User Not Found."
      })
      return
    }
  }); 
};

module.exports.login = function(req, res) {

  // if(!req.body.email || !req.body.password) {
  //   sendJSONresponse(res, 400, {
  //     "message": "All fields required"
  //   });
  //   return;
  // }

  passport.authenticate('local', function(err, user, info){
    var token;

    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if(user){
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);

};