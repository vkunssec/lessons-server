const router = require('express').Router();

router.get('/', (req,res) => {
    res.json({ api: 'test', module: 'default', api: 'lessons', test: true });
});

module.exports = router;
