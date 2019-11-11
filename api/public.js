const express = require('express');
const app = express();

app.use('/', express.static('static/public'));
app.use('/jetlag', express.static('static/jetlag'));

module.exports = app;
