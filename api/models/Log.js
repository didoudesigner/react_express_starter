const mongoose = require('mongoose');

const logSchema = mongoose.Schema({
    detail : {type: String, required: true},
    date: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Log', logSchema);