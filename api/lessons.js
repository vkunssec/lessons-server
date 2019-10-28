const express = require('express');
const app = express();

app.use('/', express.static('static/sea/lessons/dist'));

app.get('/', (req,res) => {
    res.send('file');
});

module.exports = app;
