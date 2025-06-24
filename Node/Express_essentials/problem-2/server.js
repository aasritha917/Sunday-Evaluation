const express = require("express");
const ticketRoutes = require("./routes/ticketRoutes");

const app = express();
app.use(express.json());

// Routes
app.use("/tickets", ticketRoutes);

// 404 fallback
app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

// Server
app.listen(3000, () => {
  console.log("Server starts at node 3000");
});
