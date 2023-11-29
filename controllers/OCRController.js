const OCRModel = require('../models/OCRModel'); // Import the OCRModel

class OCRController {
  async processImage(req, res) {
    try {
      const { imageURI } = req.body;
      if (!imageURI) {
        return res.status(400).json({ error: 'No image URI provided.' });
      }

      const result = await OCRModel.processImage(imageURI);
      res.status(200).json(result);
    } catch (error) {
      console.error('Error processing image:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = new OCRController();
