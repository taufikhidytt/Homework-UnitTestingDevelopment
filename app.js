require('dotenv').config();
const express = require('express');
const app = express()
const PORT = 3000;
const route = require('./routes/main.route');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(route);
app.use(errorHandler);

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`server running on http://localhost:${PORT}`);
    })
}

module.exports = app;