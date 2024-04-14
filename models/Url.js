// models/Url.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
  longUrl: { type: String },
  shortUrl: { type: String, unique: true },
  clicks: { type: Number, default: 0 },
});

module.exports = mongoose.model('Url', urlSchema);
