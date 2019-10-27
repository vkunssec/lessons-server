const express = require('express');
const https = require('https');
const vhost = require('vhost');

const app = express();

const methods = require('./tools/methods');

for (let domain of methods.domains) {
    for (let subdomain of methods.subdomains) {
        app.use(vhost(`${subdomain.name}.${domain}`, require(subdomain.handle)));
        if (subdomain.name === 'www') app.use(vhost(`${domain}`, require(subdomain.handle)));
    }
}

https.createServer(methods.credentials, app).listen(methods.appInfo.port, () => console.log(`Listening port ${methods.appInfo.port}.`));
