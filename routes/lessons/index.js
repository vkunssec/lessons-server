const router = require('express').Router();

router.get('/', (req,res) => {
    res.json({ test: true, api: 'lessons' });
});

module.exports = router;
