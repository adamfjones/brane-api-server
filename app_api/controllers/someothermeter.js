var mongoose = require('mongoose');
var SOMMeter = mongoose.model('SOMMeter');

module.exports.getData = function(req, res) {
  if (!req.payload.meterId) {
    res.status(401).json({
      "message" : "UnauthorizedError: private meter"
    });
  } else {
    SOMMeter
      .findById(req.payload._id)
      .exec(function(err, user) {
        if(err) {
          console.log(err);
          res.status(501);
        }
        res.status(200).json(user);
      });
  }
};

module.exports.storeData = function(req, res) {
  
  var sOMMeter = new SOMMeter();
  sOMMeter.meterId = req.body.meterId;
  sOMMeter.time = req.body.time;
  sOMMeter.absFlow = req.body.absFlow;
  sOMMeter.T1 = req.body.T1;
  sOMMeter.T2 = req.body.T2;
  sOMMeter.deltaT = req.body.deltaT;
  sOMMeter.power = req.body.power;
  sOMMeter.coolEnergy = req.body.coolEnergy;

  sOMMeter.save(function(err) {
    if(err) {
      console.log(err);
    }
    res.status(200);
    res.json({
      "msg" : "Success"
    });
  });
  
  
//   if (!req.payload.meterId) {
//     res.status(401).json({
//       "message" : "UnauthorizedError: meter doesn't exist"
//     });
//   } else {
//   BelEVMeter.findOne({ time: req.payload.time, meterId: req.payload.meterId }, function (err, meter) {
//     if (err) {
//       console.log(err);
//     } else {
//         console.log(meter);
//     }
//     });
//   }
};