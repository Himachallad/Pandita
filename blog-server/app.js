const express = require('express');
const app = express();
const connectDB = require('./Config/dbConnection');
const dotenv = require('dotenv').config();
const logger = require('./Config/logger');

const port = process.env.PORT || 8080;
connectDB();
app.get('/', (req, res) => {
    res.send('Welcome');

});

app.listen(port, function () {
    logger.log('info', `server started on ${port}`);
});
