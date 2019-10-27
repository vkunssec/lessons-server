const express = require('express');
const app = express();

app.use('/', express.static('./static/mar/lessons'));

module.exports = app;
