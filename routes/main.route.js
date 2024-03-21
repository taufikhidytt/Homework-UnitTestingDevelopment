const express = require('express');
const route = express.Router();
const todoRote = require('./todo.route');

route.use('/api/todo', todoRote);

module.exports = route;