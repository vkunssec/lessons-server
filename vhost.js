const domains = require('./tools/methods').domains;

const vhost = (host, app) => (req,res,next) => {
    if (!(req.hostname.split('.')[0] in domains)) {
        return res.json({ page: 'not found' });
    }
    if (req.hostname.split('.')[0] === host) return app(req,res);
    next()
}

module.exports = vhost;
