var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controls/flights')

/* GET /flights... listing. */
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create)

module.exports = router;
