const express = require('express')
const {AirplaneController} = require('../../controller/')
const router = express();

router.post('/',AirplaneController.createAirPlane)

module.exports = router;