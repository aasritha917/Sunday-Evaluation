const EventEmitter = require('events');
const fs = require('fs');
const emitter = new EventEmitter();

emitter.on('log', (message) => {
  const time = new Date().toISOString();
  const logMessage = `${time} - ${message}\n`;

  console.log("📢", logMessage); 

  // Bonus: Write to a file
  fs.appendFile('logs.txt', logMessage, (err) => {
    if (err) console.error("Failed to write to log file.");
  });
});

module.exports = emitter;
