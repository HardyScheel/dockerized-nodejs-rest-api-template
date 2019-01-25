// Imports
// Node.js modules: http (for server operations) & url (for parsing)
const http = require('http');
const url = require('url');

// need to create server: request as req and response as res
module.exports = http.createServer((req, res) => {
    var service = require('./service.js');
    const reqURL = url.parse(req.url, true);

    // create GET REST API endpoint - do URL routing with if else condition
    if (reqURL.pathname == '/sample' && req.method === 'GET') {
        console.log('Request Type: ' +
            req.method + ' Endpoint: ' +
            reqURL.pathname);

        service.sampleRequest(req, res);
    }
});