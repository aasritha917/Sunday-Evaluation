const LibraryModel = require("../model/libraryModel");

const addBook = async (req, res) => {
  try {
    const book = new LibraryModel({ ...req.body, status: "available" });
    await book.save();
    res.status(201).json({ message: "Book added", book });
  } catch (err) {
    res.status(500).json({ error: "Failed to add book" });
  }
};

const getBooks = async (req, res) => {
  try {
    const { status, title } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (title) filter.title = new RegExp(title, "i");

    const books = await LibraryModel.find(filter);
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
};

const borrowBook = async (req, res) => {
  try {
    const book = await LibraryModel.findById(req.params.id);
    if (!book || book.status !== "available") {
      return res.status(409).json({ error: "Book not available for borrowing" });
    }
    const today = new Date();
    const dueDate = new Date(today);
    dueDate.setDate(today.getDate() + 14);

    book.status = "borrowed";
    book.borrowerName = req.body.borrowerName;
    book.borrowDate = today;
    book.dueDate = dueDate;
    await book.save();

    res.status(200).json({ message: "Book borrowed", book });
  } catch (err) {
    res.status(500).json({ error: "Failed to borrow book" });
  }
};

const returnBook = async (req, res) => {
  try {
    const book = req.book;
    book.status = "available";
    book.returnDate = new Date();
    book.overdueFees = req.overdueFees;
    book.borrowerName = null;
    book.borrowDate = null;
    book.dueDate = null;
    await book.save();

    res.status(200).json({ message: "Book returned", book });
  } catch (err) {
    res.status(500).json({ error: "Failed to return book" });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await LibraryModel.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    if (book.status === "borrowed") {
      return res.status(409).json({ error: "Cannot delete borrowed book" });
    }
    await book.deleteOne();
    res.status(200).json({ message: "Book deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete book" });
  }
};

module.exports = {
  addBook,
  getBooks,
  borrowBook,
  returnBook,
  deleteBook
};