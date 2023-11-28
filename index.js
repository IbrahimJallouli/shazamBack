const express = require('express');
const bodyParser = require('body-parser');
const personneRoutes = require('./routes/personneRoutes');
const wineRoutes = require('./routes/wineRoutes'); // Import wine routes
const app = express();
const ocrRoutes = require('./routes/ocrRoutes'); // Include the new OCR routes
const noteRoutes = require('./routes/noteRoutes');
const commentRoutes = require('./routes/commentRoutes');

app.use(bodyParser.json());

app.use('/personne', personneRoutes);
app.use('/wine', wineRoutes); // Use wine routes
app.use('/ocr', ocrRoutes);
app.use('/notes', noteRoutes);
app.use('/comments', commentRoutes);
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
