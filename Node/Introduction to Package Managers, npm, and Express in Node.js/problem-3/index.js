const express = require('express');
const os = require('os');
const dns = require('dns');
const readFileData = require('./read');

const app = express();
const PORT = 3000;

//  Route 1: /test
app.get('/test', (req, res) => {
  res.send("Test route is working!");
});

//  Route 2: /readfile
app.get('/readfile', (req, res) => {
  readFileData((result) => {
    res.send(result);
  });
});

//  Route 3: /systemdetails
app.get('/systemdetails', (req, res) => {
  const totalMemory = (os.totalmem() / (1024 ** 3)).toFixed(2) + " GB";
  const freeMemory = (os.freemem() / (1024 ** 3)).toFixed(2) + " GB";
  const cpuInfo = os.cpus()[0].model;
  const cpuCores = os.cpus().length;

  res.json({
    platform: os.platform(),
    totalMemory,
    freeMemory,
    cpuModel: cpuInfo,
    cpuCores
  });
});

// Route 4: /getip
app.get('/getip', (req, res) => {
  dns.lookup('masaischool.com', { all: true }, (err, addresses) => {
    if (err) {
      res.status(500).json({ error: "DNS lookup failed." });
    } else {
      const ipv4 = addresses.find(addr => addr.family === 4);
      const ipv6 = addresses.find(addr => addr.family === 6);
      res.json({
        hostname: "masaischool.com",
        ipv4: ipv4 ? ipv4.address : "Not found",
        ipv6: ipv6 ? ipv6.address : "Not found"
      });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
