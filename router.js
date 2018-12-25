// Handle HTTP route GET / and POST / i.e Home
home = (request, response) => {
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
// Handle HTTP route GET :/username i.e. /berianlowe
user = (request, response) => {
    // if url == "/...."
    const username = request.url.replace("/", "");
    if (username.length > 0){
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.write("Header\n");
        response.write(username + "\n");
        response.end("Footer\n");
    }
        // get json from Treehouse
    // on "end"
        // show profile
    // on "error"
        // show error
}

module.exports.home = home;
module.exports.user = user;

