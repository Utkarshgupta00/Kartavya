const mongoose = require("mongoose");

const RescueTeamSchema = new mongoose.Schema({
  RescueTeamName: {
    type: String,
  },
  RescueTeamEmail: {
    type: String,
  },
  RescueTeamphoneNumber: {
    type: Number,
  },
  RescueTeamLocation: {
    type: String,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  address: {
    type: String,
  },
  credentail_id : {
    type : String,
    default : "abcde",
},

});

const RescueTeamData = new mongoose.model("RescueTeamData", RescueTeamSchema);

module.exports = RescueTeamData;
