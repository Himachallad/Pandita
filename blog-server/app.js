const express = require('express');
const app = express();
const connectDB = require('../DB/connection');
const dotenv = require('dotenv').config();

const port = process.env.PORT || 8080;
connectDB();
app.get('/', (req, res) => {
    res.send('Welcome');

});

app.listen(port, function () {
    console.log('server started !');
});