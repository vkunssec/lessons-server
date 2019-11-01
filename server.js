const express = require('express');
const https = require('https');
const http = require('http');
const vhost = require('vhost');
const cors = require('cors');
const body = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const methods = require('./tools/methods');

app.use(cors());
app.use(body.json());
app.use(body.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(methods.mongoCredentials.sea.lessons, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected mLab MongoDB.');
});

for (let domain of methods.domains) {
    for (let subdomain of methods.subdomains) {
        app.use(vhost(`${subdomain.name}.${domain}`, require(subdomain.handle)));
        if (subdomain.name === 'www') app.use(vhost(`${domain}`, require(subdomain.handle)));
    }
}

https.createServer(methods.credentials, app)
    .listen(methods.appInfo.https, () => console.log(`Listening port ${methods.appInfo.https}.`));

http.createServer(app)
    .listen(methods.appInfo.http, () => console.log(`Listening port ${methods.appInfo.http} too, but not recommended`));
