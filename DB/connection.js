const mongodb = require('mongodb');
const mongoclient = mongodb.MongoClient;
const mongoose = require('mongoose');
const URI = 'mongodb+srv://pra:pragya3122$@cluster0.sies6.mongodb.net/<dbname>?retryWrites=true&w=majority';

const connectDB = async() =>{
   await mongoose.connect(URI, { 
     useNewUrlParser: true ,
     useUnifiedTopology: true} );
   console.log('DB connected');
};

module.exports = connectDB;