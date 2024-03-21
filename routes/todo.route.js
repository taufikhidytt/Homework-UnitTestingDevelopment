const express = require('express');
const route = express.Router();
const TodoController = require('../controllers/todo.controller');


route.get("/", TodoController.findAll);
route.post("/", TodoController.create);
route.put("/:id", TodoController.update);
route.delete("/:id", TodoController.delete);


module.exports = route;