const express = require('express');
const app = express();

app.use('/', express.static('static/sea/lessons/dist'));

module.exports = app;
