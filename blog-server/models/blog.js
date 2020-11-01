  import mongoose from 'mongoose';
  const {
      Schema
  } = mongoose;

  const blogSchema = new Schema({
      authorid: {
          type: String,
          required: true
      },
      title: {
          type: String,
          required: true
      },
      desc: {
          type: String,
          required: true
      },
      imageSource: {
          type: String,
          required: true
      },
      createdDate: Date,
      likes: String,
      markFav: String
  });

  module.exports = mongoose.model('Blog', blogSchema);
