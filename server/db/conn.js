const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/database',{
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(()=>{
    console.log('mongodb connected successfully');
}).catch((error)=>{
    console.log(error);
});


 