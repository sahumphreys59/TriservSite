const express = require('express');
const eventRoutes = require('./src/event/routes');
const jobRoutes = require('./src/job/routes');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public/images'));
app.use(express.static('public/css'));
app.use(express.static('public/json'));
app.use(express.static('public/svg'));
app.use(express.static(path.join(__dirname, 'dist')));

app.use(express.json());
app.use('/api/v1/events', eventRoutes);
app.use('/api/v1/jobs', jobRoutes);

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
  console.log('Navigated to /mainframe-services');
  res.sendFile(path.join(__dirname, 'dist', 'mainframe-services.html'));
});

app.get('/partners', (req, res) => {
  console.log('Navigated to /partners');
  res.sendFile(path.join(__dirname, 'dist', 'partners.html'));
});

app.get('/about', (req, res) => {
  console.log('Navigated to /about');
  res.sendFile(path.join(__dirname, 'dist', 'about.html'));
});

app.get('/contact', (req, res) => {
  console.log('Navigated to /contact');
  res.sendFile(path.join(__dirname, 'dist', 'contact.html'));
});

app.get('/news', (req, res) => {
  console.log('Navigated to /news');
  res.sendFile(path.join(__dirname, 'dist', 'news.html'));
});


app.get('/services/maintence-support', (req, res) => {
  console.log('Navigated to /maintence-support');
  res.sendFile(path.join(__dirname, 'dist', 'maintence-support.html'));
});

app.get('/services/programming-support', (req, res) => {
  console.log('Navigated to /programming-support');
  res.sendFile(path.join(__dirname, 'dist', 'programming-support.html'));
});

app.get('/support/ftp-support', (req, res) => {
  console.log('Navigated to /ftp-support');
  res.sendFile(path.join(__dirname, 'dist', 'ftp-support.html'));
});

app.get('/careers', (req, res) => {
  console.log('Navigated to /careers');
  res.sendFile(path.join(__dirname, 'dist', 'careers.html'));
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});