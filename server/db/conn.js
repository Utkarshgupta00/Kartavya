const mongoose = require('mongoose');

const uri = "mongodb+srv://utkarshg494:pEG7Uj8fyBu5tZb@cluster0.grtb6fr.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(()=>{
    console.log('mongodb connected successfully');
}).catch((error)=>{
    console.log(error);
});


