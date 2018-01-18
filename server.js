const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./routes/apiUser');

// set the port for the express server and mongoDB URI
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/gystDB";

// create the app
const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'client/public')));

// set Mongoose to use Promises
// connect to the MongoDB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
    useMongoClient: true
});

// bring in the API Routes
// if no API routes are hit, send the React app
app.use('/api', routes);
app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// start up the router on the PORT
app.listen(PORT, () => console.log(`App is now running on Port ${PORT}`));