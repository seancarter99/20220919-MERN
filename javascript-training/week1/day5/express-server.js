/**
 * Express is "fast, unopinionated, and minimalist"
 * 
 * Unopinionated - Express has no opinions on folder structure or general project structure. 
 *                 You build apps the way you want
 * Minimalist - Compared to Node's http module, Express provides a very simplistic way of interacting with it
 */

// It finds express by looking in node_modules
const express = require('express');

// We can use express to create our application object.
// The app object is what we'll build our application on
const app = express();


// Express uses middleware heavily
// Middleware is essentially code that will run during our code's lifecycle both before and after

// Custom middleware
// next is a function that invoke the next middleware inline
// If next is not called, then the chain breaks. No further middleware will be called
const logger = (req, res, next) => {
    console.log(`Request received from ${req.originalUrl}!`);
    next(); // This will invoke the next middleware inline
}

// app.use tells it to use a particular middleware and apply it to the app
// In doing so, it applies to everything
app.use(logger);

// This middleware is used on basically any REST server you'll write
// Requests coming in with a request body and a Content-Type of application/json will automatically be parsed into
   // a JS object
// Any responses sent using a JS object will be converted into JSON and the Content-Type header set to application/json
app.use(express.json());

// Import my routes
const condimentRouter = require('./routes/condiment.route.js'); // Import the condiment Router object
app.use('/condiments', condimentRouter); // Anything beginning with /condiments will get forwarded to the router

// const authenticate = (req, res, next) => {
//     if (req.body.creds == null) {
//         res.send('Invalid credentials!');
//     } else {
//         next(); // Let them continue since the creds were valid
//     }
// }

// GET requests to / should give the homepage content
// Adding logger here adds the middleware ONLY to this endpoint
app.get('/', /* logger, */ (req, res) => {
    // The app.all will not run for this request
    res.send('Welcome to the homepage!');
});

// Any PUT request with cat in the URL will be triggered here
// The /cat/ syntax is a regular expression where everything between the two /s is the Regex
app.put(/cat/, (req, res) => {
    res.send('Enjoy this cat picture');
});

app.post('/condiment', (req, res) => {
    console.log(req.body);
    // res.send(req.body); // Sends it as JSON still because of the express.json() middleware

    // I can change the status code I get back using the .status method or sendStatus
    res.status(418).json(req.body); // I like to use this still, for readability. At a glance, a dev can that's JSON data
});

// This method intercepts ALL traffic from any HTTP method and ALL URLs
// Make sure app.all('*') is at the bottom otherwise it will intercept all traffic
app.all('*', (request, response) => {
    response.status(404).send('We could not find what it is you were looking for'); // Send is essentially write and end wrapped into one
    // response.send('Hello Again');
});

// I need to mount app and have listen to a given port
app.listen(8080);