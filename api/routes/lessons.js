const router = require('express').Router();
const upload = require('../../tools/multer'); 
const crud = require('../db/lessons');

router.get('/', (req,res) => {
    res.json({ api: { origin: 'sea', res: 'lessons' }, module: 'default', test: true, secure: true });
});

router.post('/', async (req,res) => {
    const lessons = await crud.findAll(req,res);
    res.json(lessons);
});

router.post('/auth', (req,res) => {
    if (req.body.password === process.env.PASS_SEA) {
        res.json({ result: true });
    } else {
        res.json({ result: false });
    }
});

router.post('/add', upload.single('lesson'), async (req,res) => {
    if (!req.file || Object.keys(req.file).length === 0) {
        return res.json({ 
            result: false, 
            message: 'Nenhum arquivo enviado, tente novamente.' 
        });
    }

    const lesson = await crud.insert(req,res);
    res.json(lesson);
});

module.exports = router;
