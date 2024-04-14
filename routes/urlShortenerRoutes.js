// routes/urlShortenerRoutes.js

const express = require('express');
const router = express.Router();
const urlShortenerController = require('../controllers/urlShortenerController.js');

router.post('/shorten', urlShortenerController.shortenUrl);
router.get('/:shortUrl', urlShortenerController.redirectUrl);

module.exports = router;
