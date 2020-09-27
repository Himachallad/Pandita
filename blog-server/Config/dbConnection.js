const mongoose = require('mongoose');
const logger = require('./logger');

const mongoURI = process.env.MONGODB_URI || "mongodb+srv://admin:techBlogAdmin@cluster0.sies6.mongodb.net/TECHBLOG?retryWrites=true&w=majority"
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    logger.log('info', 'DB connected');
  } catch (err) {
    logger.log('error', 'Error in connecting to DB' + err);
    throw (err);
  };
};

module.exports = connectDB;
