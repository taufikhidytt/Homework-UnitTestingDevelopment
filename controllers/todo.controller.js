const todoServices = require('../services/todo.services');
class TodoController {
    static findAll = async (req, res, next) => {
        try {
            const data = await todoServices.findAll(req.query);
            res.json(data);
        } catch (error) {
            next(error);
        }
    }

    static create = async (req, res, next) => {
        try {
            const data = await todoServices.create(req.body);
            res.json(data);
        } catch (error) {
            next(error);
        }
    }

    static update = async (req, res, next) => {
        try {
            const params = {
                id: req.params.id,
                body: req.body
            }
            const data = await todoServices.update(params);
            res.json(data);
        } catch (error) {
            next(error);
        }
    }

    static delete = async (req, res, next) => {
        try {
            const data = await todoServices.delete(req.params.id);
            res.json(data);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = TodoController;