const express = require('express');

// set the port for the express server
const PORT = 3000;

// create the app and the static file folder
const app = express();
app.use(express.static(__dirname + '/client/public'));

// set the route to funnel everyone through
// could use the wildcard here to accept any route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/public/index.html');
});

// start up the router on the PORT
app.listen(PORT, () => console.log(`App is now running on Port ${PORT}`));