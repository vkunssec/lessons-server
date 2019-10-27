const crypto = require('crypto');
const fs = require('fs');
require('dotenv/config');

function sha256(value) {
    return crypto.createHash('sha256').update(value).digest('hex');
}

const appInfo = {
    name: 'Lightsail AWS NodeJS Server',
    secure: true,
    port: process.env.PORT || 443
};

const credentials = { 
    key: fs.readFileSync(process.env.KEY),
    cert: fs.readFileSync(process.env.CERT)
};

const domains = [ 
    'vknc',
    'vknc.tk',
    'localhost',
    'localhost:3000',
    'lessons',
    'controledanca',
    'apis'
];

module.exports = {
    sha256,
    appInfo,
    credentials,
    domains
}
