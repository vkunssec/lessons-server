const mongoose = require('mongoose');

const LessonSchema = mongoose.Schema({
    title: { 
        type: String,
        require: true 
    },
    describe: String,
    date: {
        type: Date,
        default: Date.now
    },
    file: { 
        type: String,
        require: true 
    }
});

module.exports = mongoose.model('Lessons', LessonSchema);
