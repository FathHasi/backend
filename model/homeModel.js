const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema(
    {
  thumbnail: String,
  title: String
});

const Home = mongoose.model('Home', HomeSchema);

module.exports = Home