const http = require('http');

// Create our server by passing it a callback
// The callback function handles the HTTP request and HTTP response
const server = http.createServer((request, response) => {
    // Homepage is typically /
    if (request.url === '/') {
        response.write('Welcome to my website!'); // Writes Hello World to the response body
        response.end(); // Sends off the http response
    } else if (request.url === '/about') {
        response.writeHead(200);
        response.write('<h2>My name is Sean!</h2>');
        response.end();
    } else if (request.url === '/movies') {
        // If it's a GET request, find all movies
        if (request.method === 'GET') {
            response.write('Finding all movies!');
            response.end();
        } else if (request.method === 'POST') {
            response.write('Created a movie!');
            response.end();
        }
        // If it's a POST request, create a movie
    }
    // response.end(); // You could put it here
    // switch (request.url) {
    //     case '/':
    //         response.write('Welcome to my website!'); // Writes Hello World to the response body
    //         response.end(); // Sends off the http response
    //         break;
    //     case '/about':
    //         response.write('<h2>My name is Sean!</h2>');
    //         response.end();
    //         break;
    // }
});

// I need to start my server by having it listen to a port on my machine
// HTTP 80
// DNS 53
// HTTPS 443

server.listen(8080);