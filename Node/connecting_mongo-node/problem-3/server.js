const express = require("express");
const connectDB = require("./config/db");
const libraryRouter = require("./router/libraryRoutes");

const app = express();
app.use(express.json());

connectDB();

app.use("/library", libraryRouter);

app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

app.listen(3000, () => {
  console.log("Server running......");
});
