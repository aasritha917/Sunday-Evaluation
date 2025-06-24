const express = require("express");
const router = express.Router();
const controller = require("../controllers/readerController");
const returnCheck = require("../middlewares/returnCheckMiddleware");

router.get("/books", controller.getAvailableBooks);
router.post("/borrow/:id", controller.borrowBook);
router.post("/return/:id", returnCheck, controller.returnBook);

module.exports = router;
