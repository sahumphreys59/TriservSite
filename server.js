const express = require('express');
const eventRoutes = require('./src/event/routes');
const jobRoutes = require('./src/job/routes');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const jwt = require('jsonwebtoken'); 

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public/images'));
app.use(express.static('public/css'));
app.use(express.static('public/json'));
app.use(express.static('public/svg'));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json());
app.use('/api/v1/events', eventRoutes);
app.use('/api/v1/jobs', jobRoutes);

/* ------------- authorization ------------- */
const allowedEmails = ["sarah_humphreys@triserv.com", "tim_humpreys@triserv.com", "jaye_cerutti@triserv.com"];
const sharedPassword = "triCap08";

app.get('/api/auth', (req,res) => {
  res.json({
    message: 'Hey there! Welcome to this API service'
  });
});

app.post('/api/auth/posts', verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretKey', (err, authData) => {
    if (err) {
      res.sendStatus(403); //forbidden
    } else {
      res.json({
        message: 'Posts created...',
        authData
      });
    }
  })
});
 
app.post('/api/auth/login', (req, res) => {
  // const user = {
  //   id: 1,
  //   username: 'John',
  //   email: 'john@gmail.com'
  // }

  // jwt.sign({user: user}, 'secretKey', (err, token) => {
  //   res.json({
  //     token,
  //   });
  // });

  const {email, password } = req.body;
  const previousUrl = req.get('Referrer') || '/'; // Fallback to home page if no referrer
  if (allowedEmails.includes(email) && password === sharedPassword) {
    res.locals.userAuthenticated = true;
    res.status(200).redirect(previousUrl);
  }
 });

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(' ')[1]; 
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403); //forbidden
  }
}

/* --------------------------------------------  */

// Route for the root
app.get('/', (req, res) => {
  console.log('Navigated to landing page');
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