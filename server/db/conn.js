const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://amangangwani000:keepitsimple@cluster0.0eqlkqm.mongodb.net/database?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(()=>{
    console.log('mongodb connected successfully');
}).catch((error)=>{
    console.log(error);
});


