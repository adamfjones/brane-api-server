var mongoose = require('mongoose');
var ETSLVIM = mongoose.model('EtslVIM');

module.exports.getData = function(req, res) {
  // console.log("Here: " + req.query.meterId);
  if (!req.query.meterId) {
    res.status(401).json({
      "message" : "UnauthorizedError: private meter"
    });
  } else {
    ETSLVIM.find({
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

module.exports.getkWData = function(req, res) {
  // console.log("Here: " + req.query.meterId);
  if (!req.query.meterId) {
    res.status(401).json({
      "message" : "UnauthorizedError: private meter"
    });
  } else {
    ETSLVIM.find({
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
  var etslVIM = new ETSLVIM();
  etslVIM.meterId = req.body.meterId;
  etslVIM.time = req.body.time;
  etslVIM.kWh = req.body.kWh;
  etslVIM.kW = req.body.kW;

  etslVIM.save(function(err) {
    if(err) {
      console.log(err);
    }
    res.status(200);
    res.json({
      "msg" : "Success"
    });
  });
};