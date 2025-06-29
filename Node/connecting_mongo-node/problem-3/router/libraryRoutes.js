const express = require("express");
const {
  addBook,
  getBooks,
  borrowBook,
  returnBook,
  deleteBook,
} = require("../controller/libraryController");
const {
  validateBookData,
  checkBorrowLimit,
} = require("../middleware/libraryMiddleware");

const router = express.Router();

router.post("/books", validateBookData, addBook);
router.get("/books", getBooks);
router.patch("/borrow/:id", checkBorrowLimit, borrowBook);
router.patch("/return/:id", returnBook);
router.delete("/books/:id", deleteBook);

module.exports = router;
