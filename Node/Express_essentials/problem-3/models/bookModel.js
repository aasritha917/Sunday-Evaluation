const fs = require("fs");

const readData = () => JSON.parse(fs.readFileSync("db.json", "utf-8"));
const writeData = (data) => fs.writeFileSync("db.json", JSON.stringify(data, null, 2));

module.exports = { readData, writeData };
