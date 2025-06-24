const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

const readTasks = () => JSON.parse(fs.readFileSync("db.json", "utf-8"));
const writeTasks = (data) => fs.writeFileSync("db.json", JSON.stringify(data, null, 2));

// GET all tasks
app.get("/tasks", (req, res) => {
  const data = readTasks();
  res.status(200).json(data.tasks);
});

// GET tasks by tag
app.get("/tasks/filter", (req, res) => {
  const { tag } = req.query;
  if (!tag) return res.status(400).json({ message: "Tag query required" });

  const data = readTasks();
  const filtered = data.tasks.filter(task => task.tag.toLowerCase() === tag.toLowerCase());
  res.status(200).json(filtered);
});

// POST a new task
app.post("/tasks", (req, res) => {
  const data = readTasks();
  const tasks = data.tasks;

  const newTask = { id: tasks.length + 1, ...req.body };
  tasks.push(newTask);

  writeTasks({ tasks });
  res.status(201).json({ message: "Task added", task: newTask });
});

// PUT update task
app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const data = readTasks();
  const tasks = data.tasks;

  const index = tasks.findIndex(task => task.id == id);
  if (index === -1) return res.status(404).json({ message: "Task not found" });

  tasks[index] = { ...tasks[index], ...req.body };
  writeTasks({ tasks });

  res.status(200).json({ message: "Task updated", task: tasks[index] });
});

// DELETE task
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const data = readTasks();
  const tasks = data.tasks;

  const newTasks = tasks.filter(task => task.id != id);
  if (tasks.length === newTasks.length) return res.status(404).json({ message: "Task not found" });

  writeTasks({ tasks: newTasks });
  res.status(200).json({ message: "Task deleted" });
});

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

// Start server
app.listen(3000, () => {
  console.log("server starts on node 3000");
});
