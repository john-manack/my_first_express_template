'use strict';

const HTTP = require('http');

const HOSTNAME = '127.0.0.1';
const PORT = 3000;

const express = require('express');
const app = express();

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer); // define what engine is used for 'html' (DEFINES)
app.set('views', 'templates'); // this tells express that all of our views will be in a 'templates' folder (ANSWERS 'WHERE?')
app.set('view engine', 'html'); // tells express that when the view engine is loaded, the enginge which parses the html is the es6renderer (EXECUTES)

const SERVER = HTTP.createServer(app);

SERVER.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running on http://${HOSTNAME}:${PORT}`)
});

const rootController = require('./routes/index');
const friendsController = require('./routes/friends');

app.use('/', rootController);
app.use('/friends', friendsController);