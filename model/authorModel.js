const { default: mongoose } = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    authorname: String,
    thumbnail: String,
    title: String,
    description: String
  });

  const Author = mongoose.model('Author', AuthorSchema);

  module.exports = Author