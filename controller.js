// Imports
// Node.js modules: http (for server operations) & url (for parsing)
const http = require('http');
const url = require('url');

// need to create server: request as req and response as res
module.exports = http.createServer((req, res) => {
    var service = require('./service.js');
    const reqURL = url.parse(req.url, true);

    //var apiVersion = "/v1";
    
    // create GET REST API endpoint - do URL routing with if else condition
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