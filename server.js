// Minimal Express server exposing server time at GET /api/time (optional)
// Place public/index.html in a folder named "public" next to this file.
// Run locally: node server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/time', (req, res) => {
  res.json({ serverTime: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});