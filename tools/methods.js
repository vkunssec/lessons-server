const crypto = require('crypto');
const fs = require('fs');
require('dotenv/config');

function sha256(value) {
    return crypto.createHash('sha256').update(value).digest('hex');
}

const appInfo = {
    name: 'Lightsail AWS NodeJS Server',
    clientURL: process.env.URL || 'https://vknc.tk/',
    secure: true,
    port: process.env.PORT || 443
};

const sessionConf = {
    key: '',
    secref: ''
};

const credentials = { 
    key: process.env.KEY || fs.readFileSync('/etc/letsencrypt/live/vknc.tk/privkey.pem'),
    cert: process.env.CERT || fs.readFileSync('/etc/letsencrypt/live/vknc.tk/fullchain.pem')
};

module.exports = {
    sha256,
    appInfo,
    sessionConf,
    credentials
}
