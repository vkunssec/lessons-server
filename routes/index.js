const router = require('express').Router();
const routerLessons = require('./lessons');

router.get('/', (req,res) => {
    res.json({ test: true });
});

router.use('/lessons', routerLessons);

module.exports = router;
