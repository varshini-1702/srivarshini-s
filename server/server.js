const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));

// API endpoint to fetch habits
app.get('/habits', (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, 'data.json'));
  const habits = JSON.parse(data);
  res.json(habits);
});

// Start the server
app.listen(PORT, () => {
  console.log(`TrackIt server is running on http://localhost:${PORT}`);
});