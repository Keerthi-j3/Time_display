const express = require('express');
const app = express();
const port = 3000;

// Serve the static HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// API to get the current time
app.get('/time', (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  res.send(currentTime);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
