const express = require('express');
const app = express();
const routingMiddleware = require('./server_middleware/routing.middleware.js');
const bodyParser = require('body-parser');
const eventRoutes = require('./src/event/routes');
const jobRoutes = require('./src/job/routes');
const { authorizeUser } = require('./server_middleware/auth.middleware.js');

const path = require('path');
const port = process.env.PORT || 3000;
const jwt = require('jsonwebtoken'); 

app.use(routingMiddleware);
app.use(express.urlencoded({ extended: true }));

/* ------ bundled with parcel ------ */
// app.use(express.static('index.js'));
// app.use(express.static('index.css'));
app.use(express.static('dist'));
app.use('/services', express.static('dist'));
/* --------------------------------- */

app.use(express.static('public/images'));
app.use(express.static('public/json'));
app.use(express.static('public/svg'));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json());
app.use('/api/v1/events', eventRoutes);
app.use('/api/v1/jobs', jobRoutes);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* ------ authorization ------ */
app.post('/auth/login', authorizeUser);
/* --------------------------- */


// development server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});