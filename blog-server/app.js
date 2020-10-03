const express = require('express');
const app = express();
const connectDB = require('./Config/dbConnection');
const dotenv = require('dotenv').config();
const logger = require('./Config/logger');
const AppError = require('./error');

const port = process.env.PORT || 8080;
connectDB();
app.get('/', (req, res) => {
    res.send('Welcome');

});

app.all('*', (req, res, next) => {
    const err = new AppError(`Requested URL not found`, 404);
    next(err);
});

app.listen(port, function () {
    logger.log('info', `server started on ${port}`);
});
