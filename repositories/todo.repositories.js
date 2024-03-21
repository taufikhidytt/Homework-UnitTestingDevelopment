const {
    Todo
} = require('../models');

class TodoRepositories {
    static findAll = async (param) => {
        try {
            const data = await Todo.findAll(param);
            return data;
        } catch (error) {
            throw error;
        }
    }

    static create = async (param) => {
        try {
            const data = await Todo.create(param, {
                returning: true
            });
            return data;
        } catch (error) {
            throw error;
        }
    }

    static update = async (id, body) => {
        try {
            const searchId = await Todo.findOne({
                where: {
                    id
                }
            });

            if (!searchId)
                throw {
                    name: "ErrorNotFound",
                    message: "Todo not found"
                };
            await searchId.update(body);
        } catch (error) {
            throw error;
        }
    }

    static delete = async (id) => {
        try {
            const searchId = await Todo.findOne(id);

            if (!searchId)
                throw {
                    name: "ErrorNotFound",
                    message: "Todo not found"
                };
            await searchId.destroy();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TodoRepositories;