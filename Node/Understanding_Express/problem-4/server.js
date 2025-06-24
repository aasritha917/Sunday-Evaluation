const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

// Utility functions
const readData = () => JSON.parse(fs.readFileSync("./db.json", "utf-8"));
const writeData = (data) => fs.writeFileSync("./db.json", JSON.stringify(data, null, 2));

// GET all books
app.get("/books", (req, res) => {
  const data = readData();
  res.status(200).json(data.books);
});

// POST new book
app.post("/books", (req, res) => {
  const data = readData();
  const books = data.books;
  const newBook = { ...req.body, id: books.length ? books[books.length - 1].id + 1 : 1 };
  books.push(newBook);
  writeData(data);
  res.status(201).json({ message: "Book added", book: newBook });
});

// GET book by ID
app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  const data = readData();
  const book = data.books.find(b => b.id == id);
  book ? res.status(200).json(book) : res.status(404).json({ message: "Book not found" });
});

// PUT update book
app.put("/books/:id", (req, res) => {
  const { id } = req.params;
  const data = readData();
  const index = data.books.findIndex(b => b.id == id);
  if (index === -1) return res.status(404).json({ message: "Book not found" });
  data.books[index] = { ...data.books[index], ...req.body };
  writeData(data);
  res.status(200).json({ message: "Book updated", book: data.books[index] });
});

// DELETE book
app.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  const data = readData();
  const newBooks = data.books.filter(b => b.id != id);
  if (data.books.length === newBooks.length) return res.status(404).json({ message: "Book not found" });
  data.books = newBooks;
  writeData(data);
  res.status(200).json({ message: "Book deleted" });
});

// Search by author or title (partial match)
app.get("/books/search", (req, res) => {
  const { author, title } = req.query;
  if (!author && !title) return res.status(400).json({ message: "Query 'author' or 'title' required" });

  const data = readData();
  let result = data.books;

  if (author) {
    result = result.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
  }

  if (title) {
    result = result.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
  }

  if (result.length === 0) {
    return res.status(404).json({ message: "No books found" });
  }

  res.status(200).json(result);
});

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

// Start server
app.listen(3000, () => {
  console.log("surver runs on node 3000");
});
