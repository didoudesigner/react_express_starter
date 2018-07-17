const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname : {type: String, required: true},
    lastname : {type: String, required: true},
    description : {type: String, required: true},
    shortDescription : {type: String, required: true},
    email : {type: String, required: true},
    showenEmail : {type: String, required: true},
    password : {type: String, required: true},
    facebookLink : String,
    instagramLink : String,
    twitterLink : String,
    githubLink : String,
    hobbies : {type: String, required: true},
    skills : [{
        name: String,
        description: String
    }],
    works : [{
        name: String,
        description: String,
        link: String
    }],
    image: {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);