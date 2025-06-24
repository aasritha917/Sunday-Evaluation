const { readData, writeData } = require("../models/bookModel");

exports.getBooks = (req, res) => {
  res.json(readData().books);
};

exports.addBook = (req, res) => {
  const data = readData();
  const newBook = {
    ...req.body,
    id: Date.now(),
    status: "available"
  };
  data.books.push(newBook);
  writeData(data);
  res.status(201).json({ message: "Book added", book: newBook });
};

exports.updateBook = (req, res) => {
  const { id } = req.params;
  const data = readData();
  const book = data.books.find(b => b.id == id);
  if (!book) return res.status(404).json({ error: "Book not found" });
  Object.assign(book, req.body);
  writeData(data);
  res.json({ message: "Book updated", book });
};

exports.deleteBook = (req, res) => {
  const { id } = req.params;
  const data = readData();
  const index = data.books.findIndex(b => b.id == id);
  if (index === -1) return res.status(404).json({ error: "Book not found" });
  data.books.splice(index, 1);
  writeData(data);
  res.json({ message: "Book deleted" });
};
