const fs = require("fs");
const path = "./db.json";

const readTickets = () => JSON.parse(fs.readFileSync(path, "utf-8")).tickets;

const writeTickets = (tickets) => {
  fs.writeFileSync(path, JSON.stringify({ tickets }, null, 2));
};

module.exports = { readTickets, writeTickets };
