var mongoose = require( 'mongoose' );

// var meterParams = new mongoose.Schema({
//   paramId: String,
//   paramName: String,
//   paramUnit: String
// });

// var meterSchema = new mongoose.Schema({
//   meterId: String,
//   meterName: String,
//   meterDescription: String,
//   meterParams: [{type: mongoose.Schema.Types.ObjectId, ref: 'params'}]//Schema.ObjectId//paramsSchema
// });

// var siteSchema = new mongoose.Schema({
//   siteId: String,
//   siteName: String,
//   siteDescription: String,
//   siteMeters: [{type: mongoose.Schema.Types.ObjectId, ref: 'meter'}]//Schema.ObjectId//meterSchema
// });

// var clientSchema = new mongoose.Schema({
//   clientId: String,
//   clientName: String,
//   clinetDescription: String,
//   clientSites: [{type: mongoose.Schema.Types.ObjectId, ref: 'site'}]//Schema.ObjectId//siteSchema
// });
var bevMeterSchema = new mongoose.Schema({
  meterId: { 
    type: String,
    required: true
  },
  time: Date,
  absFlow: Number,
  T1: Number,
  T2: Number,
  deltaT: Number,
  power: Number,
  coolEnergy: Number
});//{ collection: 'userinfo' });

var creeksideVIMSchema = new mongoose.Schema({
  meterId: { 
    type: String,
    required: true
  },
  time: Date,
  kWh: Number
});//{ collection: 'userinfo' });

var etslVIMSchema = new mongoose.Schema({
  meterId: { 
    type: String,
    required: true
  },
  time: Date,
  kWh: Number,
  kW: Number
});//{ collection: 'userinfo' });

var sOMMeterSchema = new mongoose.Schema({
  meterId: { 
    type: String,
    required: true
  },
  time: Date,
  absFlow: Number,
  T1: Number,
  T2: Number,
  deltaT: Number,
  power: Number,
  coolEnergy: Number
});//{ collection: 'userinfo' });

var EliteMeterSchema = new mongoose.Schema({
  time: Date,
  v0: Number,
  v1: Number,
  v2: Number,
  v3: Number,
  v4: Number,
  v5: Number,
  v6: Number,
  v7: Number,
  v8: Number,
  v9: Number,
  v10: Number,
  v11: Number,
  v12: Number,
  v13: Number,
  v14: Number,
  v15: Number,
  v16: Number,
  v17: Number,
  v18: Number,
  v19: Number,
  v20: Number,
  v21: Number,
  v22: Number,
  v23: Number,
  v24: Number,
  v25: Number,
  v26: Number,
  v27: Number,
  v28: Number,
  v29: Number,
  v30: Number,
  v31: Number,
  v32: Number,
  v33: Number,
  v34: Number,
  v35: Number,
  v36: Number,
  v37: Number,
  v38: Number,
  v39: Number,
  v40: Number,
  v41: Number,
  v42: Number,
  v43: Number,
  v44: Number,
  v45: Number,
  v46: Number,
  v47: Number,
  v48: Number,
  v49: Number,
  v50: Number,
  v51: Number,
  v52: Number,
  v53: Number,
  v54: Number,
  v55: Number,
  v56: Number,
  v57: Number,
  v58: Number,
  v59: Number
});

mongoose.model('BelEVMeter', bevMeterSchema);
mongoose.model('CreeksideVIM', creeksideVIMSchema);
mongoose.model('EtslVIM', etslVIMSchema);
mongoose.model('SOMMeter', sOMMeterSchema);
mongoose.model('EliteMeter', EliteMeterSchema);

