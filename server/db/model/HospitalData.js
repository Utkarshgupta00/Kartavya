const mongoose = require('mongoose');

const HospitalSchema = new mongoose.Schema({

    HospitalName: {
        type : String
    },
    HospitalEmail: {
        type : String,
    },
    phoneNumber: {
        type : Number,
    },
    location : {
        type : String,
    }

});

const HospitalData = new mongoose.model('HospitalData',HospitalSchema);

module.exports = HospitalData;