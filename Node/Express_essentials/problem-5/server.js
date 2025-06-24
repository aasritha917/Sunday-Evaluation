// server.js
const express = require("express");
const app = express();
const fs = require("fs");
const employees = JSON.parse(fs.readFileSync("./employees.json", "utf-8"));

const logger = require("./middlewares/loggerMiddleware");
const roleCheck = require("./middlewares/roleCheckMiddleware");

app.use(express.json());
app.use(logger);

// GET all employees (admin & hr)
app.get("/employees", (req, res) => {
  res.status(200).json(employees);
});

// POST new employee (admin only)
app.post("/employees", roleCheck("admin"), (req, res) => {
  const newEmp = { id: employees.length + 1, ...req.body };
  employees.push(newEmp);
  fs.writeFileSync("./employees.json", JSON.stringify(employees, null, 2));
  res.status(201).json({ message: "Employee added", employee: newEmp });
});

// PUT update employee (admin & hr)
app.put("/employees/:id", roleCheck("admin", "hr"), (req, res) => {
  const { id } = req.params;
  const index = employees.findIndex(emp => emp.id == id);
  if (index === -1) return res.status(404).json({ message: "Employee not found" });
  employees[index] = { ...employees[index], ...req.body };
  fs.writeFileSync("./employees.json", JSON.stringify(employees, null, 2));
  res.status(200).json({ message: "Employee updated", employee: employees[index] });
});

// DELETE employee (admin only)
app.delete("/employees/:id", roleCheck("admin"), (req, res) => {
  const { id } = req.params;
  const index = employees.findIndex(emp => emp.id == id);
  if (index === -1) return res.status(404).json({ message: "Employee not found" });
  employees.splice(index, 1);
  fs.writeFileSync("./employees.json", JSON.stringify(employees, null, 2));
  res.status(200).json({ message: "Employee deleted" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

app.listen(3000, () => console.log("server running on node 3000"));
