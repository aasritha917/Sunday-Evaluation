const express = require('express');
const app = express();
const PORT = 3000;

// GET /home
app.get('/home', (req, res) => {
  res.json({ message: "This is home page" });
});

// GET /contactus
app.get('/contactus', (req, res) => {
  res.json({ message: "Contact us at contact@contact.com" });
});

// BONUS: GET /about
app.get('/about', (req, res) => {
  res.json({ message: "Welcome to the About page!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
