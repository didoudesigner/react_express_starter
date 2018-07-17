const mongoose = require('mongoose');

const uploadSchema = mongoose.Schema({
    title : {type: String, required: true},
    url : {type: String, required: true},
    user : {type: String, required: true},
    date: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Upload', uploadSchema);