const { readData, writeData } = require("../models/bookModel");
const logTransaction = require("../middlewares/transactionLogger");

exports.getAvailableBooks = (req, res) => {
  const available = readData().books.filter(b => b.status === "available");
  res.json(available);
};

exports.borrowBook = (req, res) => {
  const { id } = req.params;
  const { readerName } = req.body;
  const data = readData();
  const book = data.books.find(b => b.id == id);
  if (!book || book.status !== "available") return res.status(404).json({ error: "Book not available" });

  book.status = "borrowed";
  book.borrowedBy = readerName;
  book.borrowedDate = new Date().toISOString();
  writeData(data);

  logTransaction(`${readerName} borrowed "${book.title}"`);
  res.json({ message: "Book borrowed", book });
};

exports.returnBook = (req, res) => {
  const { id } = req.params;
  const data = readData();
  const book = data.books.find(b => b.id == id);
  if (!book || book.status !== "borrowed") return res.status(404).json({ error: "Book not found or not borrowed" });

  const reader = book.borrowedBy;
  book.status = "available";
  delete book.borrowedBy;
  delete book.borrowedDate;
  writeData(data);

  logTransaction(`${reader} returned "${book.title}"`);
  res.json({ message: "Book returned", book });
};
