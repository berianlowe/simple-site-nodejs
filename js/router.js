const Profile = require("./profile.js");

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
    if (username.length > 0) {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.write("Header\n");
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
            response.write(`${values.username} has ${values.badges} badges.\n`);
            response.end("Footer\n");
        });
        //on error
        studentProfile.on("error", (error) => {
            //show error
            response.write(`${error.message} \n`);
            response.end("Footer\n");
        });
    };
}

module.exports.home = home;
module.exports.user = user;