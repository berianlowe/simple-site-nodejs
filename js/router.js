const Profile = require("./profile.js");
const renderer = require("./renderer.js");

// Handle HTTP route GET / and POST / i.e Home
home = (request, response) => {
    // if url == "/" && GET
    if (request.url === "/") {
        // show search
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        renderer.view("header", {}, response);
        renderer.view("search", {}, response);
        renderer.view("footer", {}, response);
        response.end();

    }
    // if url == "/" && POST
    //redirect to /:username
}
// Handle HTTP route GET :/username i.e. /berianlowe
user = (request, response) => {
    // if url == "/...."
    const username = request.url.replace("/", "");
    if (username.length > 0) {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        renderer.view("header", {}, response);
        // get JSON from Treehouse
        const studentProfile = new Profile(username);
        //on end
        studentProfile.on("end", (profileJSON) => {
            // show Profile

            //Store the values we need
            const values = {
                avatarURL: profileJSON.gravatar_url,
                username: profileJSON.profile_name,
                badges: profileJSON.badges.length,
                javascriptPoints: profileJSON.points.JavaScript
            }
            //Simple response
            renderer.view("profile", values, response);
            renderer.view("footer", {}, response);
            response.end();

        });
        //on error
        studentProfile.on("error", (error) => {
            //show error
            renderer.view("error", {
                errorMessage: error.message
            }, response);
            renderer.view("search", {}, response);
            renderer.view("footer", {}, response);
            response.end();
        });
    };
}
module.exports.home = home;
module.exports.user = user;