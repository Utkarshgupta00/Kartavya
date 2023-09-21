const mongoose = require('mongoose');

const RescueTeamSchema = new mongoose.Schema({

    RescueTeamName: {
        type : String
    },
    RescueTeamEmail: {
        type : String,
    },
   RescueTeamphoneNumber: {
        type : Number,
    },
    RescueTeamLocation : {
        type : String,
    }


})

const RescueTeamData = new mongoose.model('RescueTeamData',RescueTeamSchema);

module.exports = RescueTeamData;