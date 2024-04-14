// models/User.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: { type: String },
  firstName: String,
  lastName: String,
  activated: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', userSchema);
