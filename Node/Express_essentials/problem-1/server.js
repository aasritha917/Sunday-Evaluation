const express = require("express");
const todoRoutes = require("./routes/todoRoutes");

const app = express();
app.use(express.json());

app.use("/todos", todoRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

// Start server
app.listen(3000, () => {
  console.log("server run nodes 3000");
});
