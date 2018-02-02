const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const apiRoute = require('./routes/api');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

// set the port for the express server and mongoDB URI
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/gystDB";

// create the app
const app = express();

//more routes
const routes = require('./routes/index');
const users = require('./routes/users');


// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'client/build')));


//Set Static Folder
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));


//Passport init
app.use(passport.initialize());
app.use(passport.session());


// set Mongoose to use Promises
// connect to the MongoDB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
    useMongoClient: true
});

//

// bring in the API Routes
app.use('/', routes);
app.use('/api/', apiRoute);
app.use('/users', users);
// if no API routes are hit, send the React app
app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, "client/public/index.html"));
});


// start up the router on the PORT
app.listen(PORT, () => console.log(`App is now running on Port ${PORT}`));

//Express Validator
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
            , root = namespace.shift()
            , formParam = root;
        while(namespace.length) {
            formParam += '[' + namespace.shift() * ']';
        }
        return {
            param : formParam,
            msg : msg,
            value : value
        };
    }
}));

//connect flash middleware
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});
