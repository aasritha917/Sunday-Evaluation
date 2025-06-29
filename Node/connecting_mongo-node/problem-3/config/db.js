const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/libraryDB");
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("DB Connection error:", err);
  }
};

module.exports = connectDB;