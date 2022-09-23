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

// GET requests to / should give the homepage content
app.get('/', (req, res) => {
    // The app.all will not run for this request
    res.send('Welcome to the homepage!');
});

// Any PUT request with cat in the URL will be triggered here
// The /cat/ syntax is a regular expression where everything between the two /s is the Regex
app.put(/cat/, (req, res) => {
    res.send('Enjoy this cat picture');
});


// This method intercepts ALL traffic from any HTTP method and ALL URLs
// Make sure app.all('*') is at the bottom otherwise it will intercept all traffic
app.all('*', (request, response) => {
    response.send('Hello World!'); // Send is essentially write and end wrapped into one
    // response.send('Hello Again');
});

// I need to mount app and have listen to a given port
app.listen(8080);