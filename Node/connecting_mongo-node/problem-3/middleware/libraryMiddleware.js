const LibraryModel = require("../model/libraryModel");

const validateBookData = (req, res, next) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: "Incomplete Data: title and author required." });
  }
  next();
};

const checkBorrowLimit = async (req, res, next) => {
  const { borrowerName } = req.body;
  const borrowedCount = await LibraryModel.countDocuments({
    borrowerName,
    status: "borrowed",
  });

  if (borrowedCount >= 3) {
    return res.status(409).json({ error: "Borrow limit exceeded. You can borrow only 3 books at a time." });
  }
  next();
};

const calculateOverdueFees = async (req, res, next) => {
  const { id } = req.params;

  try {
    const book = await LibraryModel.findById(id);
    if (!book) return res.status(404).json({ error: "Book not found." });

    const today = new Date();
    const dueDate = new Date(book.dueDate);
    let overdueDays = Math.floor((today - dueDate) / (1000 * 60 * 60 * 24));

    if (overdueDays > 0) {
      req.overdueFees = overdueDays * 10;
    } else {
      req.overdueFees = 0;
    }

    next();
  } catch (err) {
    res.status(500).json({ error: "Internal server error while calculating overdue fees." });
  }
};

module.exports = {
  validateBookData,
  checkBorrowLimit,
  calculateOverdueFees,
};
