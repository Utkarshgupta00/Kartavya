const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    UserEmail : {
        type : String,
    },

});

const userData = new mongoose.model('userData',userSchema);

module.exports = userData;