const crypto = require('crypto');
const fs = require('fs');
require('dotenv/config');

function sha256(value) {
    return crypto.createHash('sha256').update(value).digest('hex');
}

const appInfo = {
    name: 'Lightsail AWS NodeJS Server',
    secure: true,
    https: process.env.PORT_HTTPS || 443,
    http: process.env.PORT_HTTP || 80
};

const credentials = { 
    key: fs.readFileSync(process.env.KEY),
    cert: fs.readFileSync(process.env.CERT)
};

const domains = process.env.HOST.split(';');
const subdomains = [
    {
        name: 'apis',
        handle: './api'
    },
    {
        name: 'lessons',
        handle: './api/lessons'
    },
    {
        name: 'www',
        handle: './api/public'
    }
];

module.exports = {
    sha256,
    appInfo,
    credentials,
    domains,
    subdomains
}
