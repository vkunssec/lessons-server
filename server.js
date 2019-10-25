const express = require('express');
const https = require('https');
const path = require('path');

const app = express();
const methods = require('./tools/methods');
const routes = require('./routes');

app.use('/', express.static('./static/public'));
app.use('/modules', routes);

if (process.env.NODE_ENV === 'production') {
	https.createServer(methods.credentials, app).listen(methods.appInfo.port, () => console.log(`Listening port ${methods.appInfo.port}.`));
} else {
	app.listen(methods.appInfo.port, () => console.log(`Listening port ${methods.appInfo.port}.`));
}
