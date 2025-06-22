const express = require('express');
const getFileInfo = require('./fileinfo');
const parseURL = require('./urlparser');

const app = express();
const PORT = 3000;

// /test route
app.get('/test', (req, res) => {
  res.send("Test route is working!");
});

// /fileinfo route
app.get('/fileinfo', (req, res) => {
  const { filepath } = req.query;
  const result = getFileInfo(filepath);

  if (result.error) {
    res.status(400).json({ error: result.error });
  } else {
    res.json(result);
  }
});

// /parseurl route
app.get('/parseurl', (req, res) => {
  const { url: fullUrl } = req.query;
  const result = parseURL(fullUrl);

  if (result.error) {
    res.status(400).json({ error: result.error });
  } else {
    res.json(result);
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
