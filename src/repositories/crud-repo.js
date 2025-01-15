
const { Logger } = require('../config')


class crudRepository {
    constructor(model) {
        this.model = model
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            Logger.error("somethig wen wrong in crud repo creat function")
            throw error;
        }
    }

    async destroy(data) {
        try {
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            });
            return response;
        } catch (error) {
            Logger.error("somethig went wrong in crud repo delete function")
            throw error;
        }
    }

    async get(data) {
        try {
            const response = await this.model.findByPk(data);
            return response;
        } catch (error) {
            Logger.error("somethig went wrong in crud repo find function")
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            Logger.error("somethig went wrong in crud repo findAll function")
            throw error;
        }
    }

    async update(id, data) {  // data is an object 
        try {
            const response = await this.model.update (data,{
                where:{
                    id:id
                }
            })
            return response;
        } catch (error) {
            Logger.error("somethig went wrong in crud repo findAll function")
            throw error;
        }
    }
}

module.exports =  crudRepository
