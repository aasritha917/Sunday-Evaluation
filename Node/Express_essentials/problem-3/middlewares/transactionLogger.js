const fs = require("fs");

module.exports = (message) => {
  const time = new Date().toISOString();
  const log = `[${time}] ${message}\n`;
  fs.appendFileSync("transactions.log", log);
};
