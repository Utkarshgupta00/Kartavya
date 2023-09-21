const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/database',{
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(()=>{
    console.log('mongodb connected successfully');
}).catch((error)=>{
    console.log(error);
});


