const mongoose = require('mongoose');

const NgoDataSchema = new mongoose.Schema({
    NgoName : {
        type : String,
    },
    NgoEmail : {
        type : String,
    },
    PhoneNumber : {
        type : Number,
    },
    location : {
        type : String,
    }
});

const NgoData = new mongoose.model('NgoData',NgoDataSchema);

module.exports = NgoData;