var mongoose = require('mongoose');
var BelEVMeter = mongoose.model('BelEVMeter');

module.exports.getData = function(req, res) {
  console.log("Here: " + req.query.meterId);
  if (!req.query.meterId) {
    res.status(401).json({
      "message" : "UnauthorizedError: private meter"
    });
  } else {
    BelEVMeter.find({
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
  
  var belEVMeter = new BelEVMeter();
  belEVMeter.meterId = req.body.meterId;
  belEVMeter.time = req.body.time;
  belEVMeter.absFlow = req.body.absFlow;
  belEVMeter.T1 = req.body.T1;
  belEVMeter.T2 = req.body.T2;
  belEVMeter.deltaT = req.body.deltaT;
  belEVMeter.power = req.body.power;
  belEVMeter.coolEnergy = req.body.coolEnergy;

  belEVMeter.save(function(err) {
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