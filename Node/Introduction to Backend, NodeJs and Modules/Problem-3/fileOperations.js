const fs = require('fs').promises;
const fileName = 'data.txt';

async function readFileData() {
  try {
    const data = await fs.readFile(fileName, 'utf8');
    if (data.trim().length === 0) {
      console.log("File is empty.\n");
    } else {
      console.log("File Content:\n" + data + '\n');
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log("File not found. Creating a new one with default content...\n");
      await fs.writeFile(fileName, 'This is the original content.\n');
    } else {
      console.error("Error reading the file:", err);
    }
  }
}

async function appendFileData() {
  try {
    await fs.appendFile(fileName, 'This is Appended data\n');
    console.log("Appending data...\n");
  } catch (err) {
    console.error("Error appending to the file:", err);
  }
}

module.exports = {
  readFileData,
  appendFileData
};
