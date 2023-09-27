const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();

const options = {
  cert: fs.readFileSync('ar_TH.crt'), // Path to your SSL certificate file
  key: fs.readFileSync('ar_TH.key'),   // Path to your private key file
};

const server = https.createServer(options, app);
const port = 3000;

app.get('/', (req, res) => {
  // Read the 'index.html' file and send it as a response
  fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.send(data);
  });
});

server.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`);
});
