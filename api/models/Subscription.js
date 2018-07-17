const mongoose = require('mongoose');

const subscriptionSchema = mongoose.Schema({
    firstname : {type: String, required: true},
    lastname : {type: String, required: true},
    email : {type: String, required: true},
    date: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Subscription', subscriptionSchema);