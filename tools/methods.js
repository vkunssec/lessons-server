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

const domains = {
    vknc: 'vknc',
    localhost: 'localhost',
    lessons: 'lessons',
    controledanca: 'controledanca',
    apis: 'apis'
}

const vhost = (host, app) => (req, res, next) => {
    if (!(req.hostname.split('.')[0] in domains)) {
        return res.json({ page: 'not found' });
    }
    if (req.hostname.split('.')[0] === host) return app(req,res);
    next();
}

module.exports = {
    sha256,
    appInfo,
    credentials,
    domains,
    vhost
}
