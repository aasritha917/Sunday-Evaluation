const mongoose = require("mongoose");

const librarySchema = new mongoose.Schema({
  title: String,
  author: String,
  status: { type: String, default: "available" }, // "available", "borrowed", "reserved"
  borrowerName: String,
  borrowDate: Date,
  dueDate: Date,
  returnDate: Date,
  overdueFees: Number,
});

const LibraryModel = mongoose.model("Library", librarySchema);

module.exports = LibraryModel;