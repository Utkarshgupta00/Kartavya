const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema({
    RescueTeamName: {
        type: String
    },
    location: {
        type: String
    },
    RescueTeamEmail: {
        type: String,
    },
    Requirement: {
        type: String
    },
    Number: {
        type: Number,
    },
    created_at: {
        type: Date,
        default: Date.now()
    },

});


const AlertData = mongoose.model('AlertData', AlertSchema);

module.exports = AlertData;
