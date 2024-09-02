const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: String,
  thumbnail: String,
  name: String,
  language: String,
  description: String
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book