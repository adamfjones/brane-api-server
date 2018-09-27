var mongoose = require('mongoose');
var CreeksideVIM = mongoose.model('CreeksideVIM');

module.exports.getData = function(req, res) {
  // console.log("Here: " + req.query.meterId);
  if (!req.query.meterId) {
    res.status(401).json({
      "message" : "UnauthorizedError: private meter"
    });
  } else {
    CreeksideVIM.find({
      meterId: req.query.meterId}).
      exec(function(err, meterdata) {
        if(err) {
          console.log(err);
        } else {
          res.status(200).json(meterdata);
        }
      });
  }
};
// select({ meterId: 1, time: 1, deltaT: 1 }).


module.exports.storeData = function(req, res) {
  
  var creeksideVIM = new CreeksideVIM();
  creeksideVIM.meterId = req.body.meterId;
  creeksideVIM.time = req.body.time;
  creeksideVIM.kWh = req.body.kWh;

  creeksideVIM.save(function(err) {
    if(err) {
      console.log(err);
    }
    res.status(200);
    res.json({
      "msg" : "Success"
    });
  });
};