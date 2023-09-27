const express = require('express');
const router = express.Router();
const AlertData = require('../db/model/AlertData');

router.get('/',async(req,res)=>{

    try{

        const alertData = await AlertData.find().sort({_id:-1});
        res.status(200).json(alertData);
        console.log(alertData);

    }catch(error){
        res.send(500).json((error.message));
    }
})

router.post('/', async(req,res)=>{

        try{
        const newData = await AlertData({
            RescueTeamName : req.body.name,
            location : req.body.location,
            RescueTeamEmail : req.body.email,
            Requirement : req.body.requirement,
            Number : req.body.phoneNumber
        })
        const savedData = await newData.save();
        res.status(201).json(savedData);


    }catch(error){
        res.status(501).json(error.message);
    }


})


module.exports = router;