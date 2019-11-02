const Lesson = require('../models/sea/Lesson');

exports.findAll = async (req,res) => {
    try {
        const lessons = await Lesson.find({}).sort({date: -1});
        return { result: true, message: lessons };
    } catch (error) {
        return { result: false, message: [error, lessons] };
    }
}

exports.insert = async (req,res) => {
    try {
        const lesson = new Lesson({
            title: req.body.title,
            describe: req.body.describe,
            file: req.file.path
        });
        const saved = await lesson.save();
        return { result: true, message: saved };
    } catch (error) {
        return { result: false, message: [error, saved] };
    }
}
