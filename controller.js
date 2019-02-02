'use strict';

// Imports
// Node.js modules: http (for server operations) & url (for parsing)
const http = require('http');
const url = require('url');

// Need to create server: Request as req and response as res.
module.exports = http.createServer((req, res) => {
    var service = require('./service.js');
    const reqURL = url.parse(req.url, true);

    // Create GET API endpoint - do URL routing with if else condition.
    if (reqURL.pathname == '/names' && req.method === 'GET') {
        console.log(
            new Date() +
            ' [Remote Host: ' + req.connection.remoteAddress + ']' +
            ' [Request Method: ' + req.method + ']' +
            ' [API Endpoint: ' + reqURL.pathname  + ']' +
            ' [Requested Full URL: ' + req.url  + ']'
        );
        service.namesRequest(req, res);
    }
});