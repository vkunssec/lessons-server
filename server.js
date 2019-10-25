const express = require('express');
const https = require('https');
const path = require('path');

const app = express();
const methods = require('./tools/methods');
const routes = require('./routes');

app.use('/', express.static('./static/public'));
app.use('/modules', routes);

console.log(process.env.NODE_ENV);
console.log(app.settings.env);

if (app.settings.env === 'development') {
	app.listen(methods.appInfo.port, () => console.log(`Listening port ${methods.appInfo.port}.`));
} else {
	https.createServer(methods.credentials, app).listen(methods.appInfo.port, () => console.log(`Listening port ${methods.appInfo.port}.`));
}
