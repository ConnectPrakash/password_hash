// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json())

// MongoDB connection
mongoose.connect('mongodb+srv://pp3662504:pp3662504@cluster0.kztmo7u.mongodb.net/passwordhash');
      if(mongoose){
        console.log("mongodb connected")
      }
// Routes
const authRoutes = require('./routes/authRoutes.js');
const urlShortenerRoutes = require('./routes/urlShortenerRoutes.js');

app.use('/api/auth', authRoutes);
app.use('/api/url', urlShortenerRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
