const express = require('express');
const router = express.Router();
const NgoData = require('../db/model/NgoData');

router.get('/count', async (req, res) => {
    try {
    
      const ngoCount = await NgoData.count();
      console.log("hospital Count : " +  ngoCount);
      res.status(200).json({ count: ngoCount});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

router.post('/', async(req,res)=>{

    try{

    const newData = await NgoData({
        NgoName : req.body.name,
        NgoEmail : req.body.email,
        PhoneNumber : req.body.phoneNumber,
        Location : req.body.location,
    })

    const savedData = await newData.save();
    res.status(201).json(savedData);     
    console.log(savedData);

    }catch(error){
        res.status(500).json({error : error.message});

    }



})

module.exports = router;