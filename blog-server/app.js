const express = require ('express');
const app = express();
const connectDB = require('../DB/connection');
const dotenv = require('dotenv').config();

console.log(process.env.PORT);

connectDB();
app.get('/',(req, res) => {
    res.send('Welcome');

});

app.listen(process.env.PORT,function(){
    console.log('server started');
});

