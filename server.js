const express = require('express');
const https = require('https');

const app = express();

const vhost = require('./vhost');
const apis = require('./routes');
const methods = require('./tools/methods');
const lessons = require('./api/lessons');
const public = require('./api/public');

app.use(vhost(process.env.HOST, public));
app.use(vhost('apis', apis));
app.use(vhost('lessons', lessons));

https.createServer(methods.credentials, app).listen(methods.appInfo.port, () => console.log(`Listening port ${methods.appInfo.port}.`));
