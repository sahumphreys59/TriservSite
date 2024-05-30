const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static('public/images'));
app.use(express.static('public/css'));
app.use(express.static(path.join(__dirname, 'dist')));

// Route for the root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/software', (req, res) => {
  console.log('Navigated to /software');
  res.sendFile(path.join(__dirname, 'dist', 'software.html'));
});

app.get('/support', (req, res) => {
  console.log('Navigated to /support');
  res.sendFile(path.join(__dirname, 'dist', 'support.html'));
});

app.get('/services', (req, res) => {
  console.log('Navigated to /services');
  res.sendFile(path.join(__dirname, 'dist', 'services.html'));
});

app.get('/services/mainframe-services', (req, res) => {
  console.log('Navigated to /services');
  res.sendFile(path.join(__dirname, 'dist', 'mainframe-services.html'));
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});