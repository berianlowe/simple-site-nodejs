// Problem: We need a simple way to look at user's badge count and JavaScript points from a web browser.
// Solution: Use Node.js to perform the profile look ups and server and serve our template via HTTP

// 1. Create a web server


const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    homeRoute(request, response);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// 2. Handle HTTP route GET / and POST / i.e Home
const homeRoute = (request, response) => {
    // if url == "/" && GET
    if (request.url === "/") {
        // show search
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.write("Header\n");
        response.write("Search\n");
        response.end("Footer\n");
    }
    // if url == "/" && POST
    //redirect to /:username
}
// 3. Handle HTTP route GET :/username i.e. /berianlowe
    // if url == "/...."
        // get json from Treehouse
    // on "end"
        // show profile
    // on "error"
        // show error

// 4. Function that handles the reading of files and merge in values
    // read from file and get a string
    // merge values in to string