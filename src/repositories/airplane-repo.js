const crudRepository = require('./crud-repo');
const {Airplane} = require('../models/index')


class AirplaneRepository  extends crudRepository{
    constructor(){
        super(Airplane)
    }
}

module.exports = AirplaneRepository
