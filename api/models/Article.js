const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    title : {type: String, required: true},
    urlId : {type: String, required: true},
    imageLink : String,
    date : {type: Date, default: Date.now},
    author : {type: String, required: true},
    content : {type: String, required: true},
    lastModificationDate : {type: Date, default: Date.now},
    tags: [String],
    minOfReadig: Number,
    shares: Number,
    views: Number
});

module.exports = mongoose.model('Article', articleSchema);