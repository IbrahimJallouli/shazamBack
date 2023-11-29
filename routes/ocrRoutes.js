const express = require('express');
const router = express.Router();
const ocrController = require('../controllers/OCRController');

router.post('/process-image', ocrController.processImage);

module.exports = router;
