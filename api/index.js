const express = require('express');
const app = express();

const lessons = require('./routes/lessons');

app.get('/', (req,res) => {
    res.send({ api: 'test', module: 'default', test: true });
});

app.use('/lessons', lessons);

module.exports = app;
