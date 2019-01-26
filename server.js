'use strict';

// Imports
const server = require('./controller.js');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = server;
app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}/`);
});