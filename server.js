const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 443;

const opts = {
	key: fs.readFileSync('/etc/letsencrypt/live/vknc.tk/privkey.pem'),
	cert: fs.readFileSync('/etc/letsencrypt/live/vknc.tk/fullchain.pem')
};

app.use('/', express.static('./public'));

https.createServer(opts, app).listen(port, () => console.log(`Listening port ${port}.`));
