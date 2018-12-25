const router = require('./router.js');
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
// Problem: We need a simple way to look at user's badge count and JavaScript points from a web browser.
// Solution: Use Node.js to perform the profile look ups and server and serve our template via HTTP

// Create a web server
const server = http.createServer((request, response) => {
    router.home(request, response);
    router.user(request, response);

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});