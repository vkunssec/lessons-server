const express = require('express');
const https = require('https');
const vhost = require('vhost');

const app = express();

const methods = require('./tools/methods');
const apis = require('./api/routes');
const lessons = require('./api/lessons');
const public = require('./api/public');

app.use(vhost(process.env.HOST, public));
app.use(vhost('apis.*', apis))
app.use(vhost('lessons.*', lessons));

https.createServer(methods.credentials, app).listen(methods.appInfo.port, () => console.log(`Listening port ${methods.appInfo.port}.`));
