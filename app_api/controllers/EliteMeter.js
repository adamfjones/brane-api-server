var mongoose = require('mongoose');
var ELITEMETER = mongoose.model('EliteMeter');

module.exports.getData = function(req, res) {
  // console.log("Here: " + req.query.fdate + " ISODate: " + new Date(req.query.fdate) + ".  To: " + req.query.tdate);
  if (!req.query.fdate || !req.query.tdate) {
    res.status(401).json({
      "message" : "UnauthorizedError: private meter"
    });
  } else {
    ELITEMETER.find({
      time: {
        "$gte": new Date(req.query.fdate),
        "$lt": new Date(req.query.tdate)
      }}).
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
  console.log(req);
  var EliteMeter = new ELITEMETER();
  EliteMeter.time = req.body.time;
  EliteMeter.v0 = req.body.v0;
  EliteMeter.v1 = req.body.v1;
  EliteMeter.v2 = req.body.v2;
  EliteMeter.v3 = req.body.v3;
  EliteMeter.v4 = req.body.v4;
  EliteMeter.v5 = req.body.v5;
  EliteMeter.v6 = req.body.v6;
  EliteMeter.v7 = req.body.v7;
  EliteMeter.v8 = req.body.v8;
  EliteMeter.v9 = req.body.v9;
  EliteMeter.v10 = req.body.v10;
  EliteMeter.v11 = req.body.v11;
  EliteMeter.v12 = req.body.v12;
  EliteMeter.v13 = req.body.v13;
  EliteMeter.v14 = req.body.v14;
  EliteMeter.v15 = req.body.v15;
  EliteMeter.v16 = req.body.v16;
  EliteMeter.v17 = req.body.v17;
  EliteMeter.v18 = req.body.v18;
  EliteMeter.v19 = req.body.v19;
  EliteMeter.v20 = req.body.v20;
  EliteMeter.v21 = req.body.v21;
  EliteMeter.v22 = req.body.v22;
  EliteMeter.v23 = req.body.v23;
  EliteMeter.v24 = req.body.v24;
  EliteMeter.v25 = req.body.v25;
  EliteMeter.v26 = req.body.v26;
  EliteMeter.v27 = req.body.v27;
  EliteMeter.v28 = req.body.v28;
  EliteMeter.v29 = req.body.v29;
  EliteMeter.v30 = req.body.v30;
  EliteMeter.v31 = req.body.v31;
  EliteMeter.v32 = req.body.v32;
  EliteMeter.v33 = req.body.v33;
  EliteMeter.v34 = req.body.v34;
  EliteMeter.v35 = req.body.v35;
  EliteMeter.v36 = req.body.v36;
  EliteMeter.v37 = req.body.v37;
  EliteMeter.v38 = req.body.v38;
  EliteMeter.v39 = req.body.v39;
  EliteMeter.v40 = req.body.v40;
  EliteMeter.v41 = req.body.v41;
  EliteMeter.v42 = req.body.v42;
  EliteMeter.v43 = req.body.v43;
  EliteMeter.v44 = req.body.v44;
  EliteMeter.v45 = req.body.v45;
  EliteMeter.v46 = req.body.v46;
  EliteMeter.v47 = req.body.v47;
  EliteMeter.v48 = req.body.v48;
  EliteMeter.v49 = req.body.v49;
  EliteMeter.v50 = req.body.v50;
  EliteMeter.v51 = req.body.v51;
  EliteMeter.v52 = req.body.v52;
  EliteMeter.v53 = req.body.v53;
  EliteMeter.v54 = req.body.v54;
  EliteMeter.v55 = req.body.v55;
  EliteMeter.v56 = req.body.v56;
  EliteMeter.v57 = req.body.v57;
  EliteMeter.v58 = req.body.v58;
  EliteMeter.v59 = req.body.v59;
  

  EliteMeter.save(function(err) {
    if(err) {
      console.log(err);
    }
    res.status(200);
    res.json({
      "msg" : "Success"
    });
  });
  
};