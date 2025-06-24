const { readTodos, writeTodos } = require("../models/todoModel");

// GET all todos
const getTodos = (req, res) => {
  const todos = readTodos();
  res.json(todos);
};

// POST new todo
const addTodo = (req, res) => {
  const todos = readTodos();
  const newTodo = {
    id: todos.length ? todos[todos.length - 1].id + 1 : 1,
    title: req.body.title,
    completed: req.body.completed || false
  };
  todos.push(newTodo);
  writeTodos(todos);
  res.status(201).json({ message: "Todo added", todo: newTodo });
};

// PUT update todo
const updateTodo = (req, res) => {
  const { id } = req.params;
  const todos = readTodos();
  const index = todos.findIndex(t => t.id == id);
  if (index === -1) return res.status(404).json({ message: "Todo not found" });

  todos[index] = { ...todos[index], ...req.body };
  writeTodos(todos);
  res.json({ message: "Todo updated", todo: todos[index] });
};

// DELETE a todo
const deleteTodo = (req, res) => {
  const { id } = req.params;
  const todos = readTodos();
  const updatedTodos = todos.filter(t => t.id != id);
  if (todos.length === updatedTodos.length) return res.status(404).json({ message: "Todo not found" });

  writeTodos(updatedTodos);
  res.json({ message: "Todo deleted" });
};

// SEARCH todos
const searchTodos = (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ message: "Missing search query" });

  const todos = readTodos();
  const results = todos.filter(t => t.title.toLowerCase().includes(q.toLowerCase()));
  results.length
    ? res.json(results)
    : res.status(404).json({ message: "No matching todos found" });
};

module.exports = {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  searchTodos
};
