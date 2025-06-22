const fs = require('fs');
const path = require('path');

function readFileData(callback) {
  const filePath = path.join(__dirname, 'Data.txt');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      callback("Error reading file or file not found.");
    } else {
      callback(data);
    }
  });
}

module.exports = readFileData;
