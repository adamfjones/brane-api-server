var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: process.env.JWT_Secret,
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlMeterBev = require('../controllers/BevMeter');
var ctrlElite = require('../controllers/EliteMeter');
var ctrlCreekside = require('../controllers/Creekside');
var ctrlEtsl = require('../controllers/Etsl');
var ctrlMeterSomeOtherMeter = require('../controllers/someothermeter');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// meter Get

router.get('/meter/bevmeter',  ctrlMeterBev.getData);
router.get('/meter/creeksidevim', ctrlCreekside.getData);
// router.get('/meter/creeksidevimkw', ctrlCreekside.getkWData);
router.get('/meter/elitemeter', ctrlElite.getData);
router.get('/meter/etslvim', ctrlEtsl.getData);
router.get('/meter/etslvimkw', ctrlEtsl.getkWData);

// meter Set
router.post('/meter/bevmeter', ctrlMeterBev.storeData);
router.post('/meter/creeksidevim', ctrlCreekside.storeData);
router.post('/meter/elitemeter', ctrlElite.storeData);
router.post('/meter/etslvim', ctrlEtsl.storeData);
router.post('/meter/someothermetertype', ctrlMeterSomeOtherMeter.storeData);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
router.post('/changePassword', auth, ctrlAuth.changePassword);

module.exports = router;
