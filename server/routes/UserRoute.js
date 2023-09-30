const express = require('express');
const router = express.Router();
const UserData = require('../db/model/user');

router.get('/',async(req,res)=>{

    try{

        const userData = await UserData.find();
        res.status(200).json(userData);
        console.log(userData);

    }catch(error){
        res.send(500).json((error.message));
    }
})

router.post('/', async(req,res)=>{

        try{
        const newData = await UserData({
            UserEmail : req.body.email,
        })
        const savedData = await newData.save();
        res.status(201).json(savedData);


    }catch(error){
        res.status(501).json(error.message);
    }


})


module.exports = router;