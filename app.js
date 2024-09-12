const express = require('express');
const app = express();
const port = 3000;

let times = []; // List to store times

app.use(express.json()); // Middleware to parse JSON

// Serve the static HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// API to get the current time (Read)
app.get('/time', (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  res.send(currentTime);
});

// API to get all times (Read)
app.get('/times', (req, res) => {
  res.json(times);
});

// API to add a new time (Create)
app.post('/times', (req, res) => {
  const newTime = req.body.time;
  times.push(newTime);
  res.json({ message: 'Time added', times });
});

// API to update an existing time (Update)
app.put('/times/:index', (req, res) => {
  const index = req.params.index;
  const updatedTime = req.body.time;

  if (times[index]) {
    times[index] = updatedTime;
    res.json({ message: 'Time updated', times });
  } else {
    res.status(404).json({ message: 'Time not found' });
  }
});

// API to delete a time (Delete)
app.delete('/times/:index', (req, res) => {
  const index = req.params.index;

  if (times[index]) {
    times.splice(index, 1);
    res.json({ message: 'Time deleted', times });
  } else {
    res.status(404).json({ message: 'Time not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
