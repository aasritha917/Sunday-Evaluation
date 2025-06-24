const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

// Helper functions
const readData = () => JSON.parse(fs.readFileSync("db.json", "utf-8"));
const writeData = (data) => fs.writeFileSync("db.json", JSON.stringify(data, null, 2));

// POST - Add a student
app.post("/students", (req, res) => {
  const data = readData();
  const students = data.students;
  const newStudent = { ...req.body, id: students.length ? students[students.length - 1].id + 1 : 1 };
  students.push(newStudent);
  writeData(data);
  res.status(201).json({ message: "Student added", student: newStudent });
});

// GET - All students
app.get("/students", (req, res) => {
  const data = readData();
  res.status(200).json(data.students);
});

// GET - Student by ID
app.get("/students/:id", (req, res) => {
  const { id } = req.params;
  const data = readData();
  const student = data.students.find(s => s.id == id);
  student ? res.json(student) : res.status(404).json({ message: "Student not found" });
});

// PUT - Update student
app.put("/students/:id", (req, res) => {
  const { id } = req.params;
  const data = readData();
  const index = data.students.findIndex(s => s.id == id);
  if (index === -1) return res.status(404).json({ message: "Student not found" });
  data.students[index] = { ...data.students[index], ...req.body };
  writeData(data);
  res.json({ message: "Student updated", student: data.students[index] });
});

// DELETE - Remove student
app.delete("/students/:id", (req, res) => {
  const { id } = req.params;
  const data = readData();
  const newList = data.students.filter(s => s.id != id);
  if (newList.length === data.students.length) return res.status(404).json({ message: "Student not found" });
  data.students = newList;
  writeData(data);
  res.json({ message: "Student deleted" });
});

// GET - Search by course
app.get("/students/search", (req, res) => {
  const { course } = req.query;
  if (!course) return res.status(400).json({ message: "Course query required" });

  const data = readData();
  const result = data.students.filter(s => s.course.toLowerCase().includes(course.toLowerCase()));

  result.length
    ? res.json(result)
    : res.status(404).json({ message: "No students found" });
});

// 404 for other routes
app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

// Start server
app.listen(3000, () => {
  console.log("🎓 Student API running on http://localhost:3000");
});
