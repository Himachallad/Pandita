  import mongoose from 'mongoose';
  const {
      Schema
  } = mongoose;

  const categorySchema = new Schema({
      categoryid: {
          type: String,
          required: true
      },
      title: {
          type: String,
          required: true
      },
      content: {
          type: String,
          required: true
      },
      thumbbnailSource: {
          type: String,
          required: true
      }
  });

  module.exports = mongoose.model('Category', categorySchema);
