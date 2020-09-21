const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI || "mongodb+srv://pra:pragya3122$@cluster0.sies6.mongodb.net/<dbname>?retryWrites=true&w=majority"
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('DB connected');
  } catch (err) {
    console.log('Error in connecting to DB' + err);
    throw (err);
  };
};

module.exports = connectDB;
