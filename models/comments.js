  import mongoose from 'mongoose';
  const {
      Schema
  } = mongoose;

  const commentSchema = new Schema({
      blogid: {
          type: String,
          required: true
      },
      title: {
          type: String,
          required: true
      },
      publishedBy: {
          type: String,
          required: true
      },
      content: {
          type: String,
          required: true
      },
      markFav: String,
      likes: String,
      creationDate: Date
  });

  module.exports = mongoose.model('Comments', commentSchema);
