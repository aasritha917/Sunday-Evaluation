const express = require("express");
const router = express.Router();
const controller = require("../controllers/adminController");

router.get("/books", controller.getBooks);
router.post("/books", controller.addBook);
router.patch("/books/:id", controller.updateBook);
router.delete("/books/:id", controller.deleteBook);

module.exports = router;
