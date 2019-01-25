'use strict';

// Imports
const server = require('./controller.js');

// Constants
const HOSTNAME = '127.0.0.1';
const PORT = 3000;

// App
const app = server;
app.listen(PORT, HOSTNAME, () => {
    console.log(`Running on http://${HOSTNAME}:${PORT}/`);
});