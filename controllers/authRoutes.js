// controllers/authController.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

const register = async (req, res) => {
  // Handle user registration
  res.send("Register")
};

const login = async (req, res) => {
  // Handle user login
};

const forgotPassword = async (req, res) => {
  // Handle forgot password
};

const resetPassword = async (req, res) => {
  // Handle password reset
};

module.exports = { register, login, forgotPassword, resetPassword };
