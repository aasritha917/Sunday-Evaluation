const express = require('express');
const app = express();
const PORT = 3000;

const emitter = require('./eventLogger');
const delayMessage = require('./delay');

// /test route
app.get('/test', (req, res) => {
  res.send("Test route is working!");
});

// /emit?message=Something
app.get('/emit', (req, res) => {
  const { message } = req.query;

  if (!message) {
    return res.status(400).json({ error: "Message query parameter is required." });
  }

  emitter.emit('log', message);
  res.json({
    status: "Event logged",
    timestamp: new Date().toISOString()
  });
});

// /delay?message=Waited&time=2000
app.get('/delay', async (req, res) => {
  const { message, time } = req.query;

  try {
    const result = await delayMessage(message, parseInt(time));
    res.json(result);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
