const express = require('express');
const app = express();
const jetlag = require('../static/jetlag/server');

app.use('/', express.static('static/public'));
app.use('/jetlag', jetlag);

module.exports = app;
