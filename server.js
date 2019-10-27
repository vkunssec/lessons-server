const express = require('express');
const https = require('https');

const app = express();

const methods = require('./tools/methods');
const apis = require('./api/routes');
const lessons = require('./api/lessons');
const public = require('./api/public');

app.use(methods.vhost(process.env.HOST, public));
app.use(methods.vhost('apis', apis));
app.use(methods.vhost('lessons', lessons));

https.createServer(methods.credentials, app).listen(methods.appInfo.port, () => console.log(`Listening port ${methods.appInfo.port}.`));
