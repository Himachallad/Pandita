const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

console.log(process.env.MONGODB_URI);
const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log('DB connected');
};

module.exports = connectDB;
