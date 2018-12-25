const fs = require('fs');

view = (templateName, values, response) => {
    //Read from temlate file
    const fileContents = fs.readFileSync(`./views/${templateName}.html`);
        // Insert Values in to the content
        // Write out to the response.
        response.write(fileContents);
    ;
}

module.exports.view = view;