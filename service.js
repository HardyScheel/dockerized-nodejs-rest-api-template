'use strict';

// Imports
const url = require('url');

exports.namesRequest = function (req, res) {
    const reqURL = url.parse(req.url, true);
    var name = 'World';

    // Check if request URL has a query parameter called as "name".
    if (reqURL.query.name) {
        name = reqURL.query.name;
    }

    // Else, response with "Hello World".
    var response = {
        "text": "Hello " + name
    };

    // HTTP response status is set as 200.
    res.statusCode = 200;
    // Content Type of the response is JSON.
    res.setHeader('Content-Type', 'application/json');
    // Send HTTP reponse back as String from JSON object.
    res.end(JSON.stringify(response));
}