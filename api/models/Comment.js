const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    username : {type: String, required: true},
    email : {type: String, required: true},
    date: {type: Date, default: Date.now},
    comment : {type: String, required: true},
    article : {type: mongoose.SchemaTypes.ObjectId, ref: 'Article', required: true}    
});

module.exports = mongoose.model('Comment', commentSchema);