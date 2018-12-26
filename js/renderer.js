const fs = require('fs');

mergeValues = (values, content) => {
    // Cycle over the  keys
    for (var key in values) {
        //Replace all {{key}} with the values from the values object
        content = content.replace(`{{${key}}}`, values[key]);
    }
    // Return merged values
    return content;
}

view = (templateName, values, response) => {
    //Read from temlate file
    let fileContents =
        fs.readFileSync(`./views/${templateName}.html`, {
            encoding: "utf8"
        });
    // Insert Values in to the content
    fileContents = mergeValues(values, fileContents);
    // Write out to the response.
    response.write(fileContents);;
}

module.exports.view = view;