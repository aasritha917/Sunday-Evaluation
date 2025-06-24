const fs = require("fs");
const path = "./db.json";

const readTodos = () => {
  const data = fs.readFileSync(path, "utf-8");
  return JSON.parse(data).todos;
};

const writeTodos = (todos) => {
  const data = { todos };
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
};

module.exports = { readTodos, writeTodos };
