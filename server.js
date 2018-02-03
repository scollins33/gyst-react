const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const apiRoute = require('./routes/api');

// set the port for the express server and mongoDB URI
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/gystDB";

// create the app
const app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client/build')));

// set Mongoose to use Promises
// connect to the MongoDB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
    useMongoClient: true
});

app.use('/api/', apiRoute);
// if no API routes are hit, send the React app
app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});

// start up the router on the PORT
app.listen(PORT, () => console.log(`App is now running on Port ${PORT}`));
