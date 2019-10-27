const express = require('express');
const path = require('path');
const app = express();

app.use('/', express.static('static/mar/lessons'));

app.get('/', (req,res) => {
    res.send('file');
});

module.exports = app;
