
const { AirplaneService } = require('../services')
const { StatusCodes } = require('http-status-codes');

async function createAirPlane(req, res) {
    try {
        console.log(req.body);
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        return res.status(StatusCodes.CREATED)
            .json({
                success: true,
                message: 'successfully created an airplane',
                data: airplane,
                error: {}
            })
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                success: false,
                message: 'unable to create an airplane',
                data: {},
                error: error
            })
    }
}

module.exports = {
    createAirPlane
}