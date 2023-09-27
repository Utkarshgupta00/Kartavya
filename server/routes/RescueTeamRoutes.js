const express = require('express');
const router = express.Router();
const RescueTeamData = require('../db/model/RescueTeamData');

router.get('/',(req,res)=>{
    res.send('rescue team data displayed');
})

router.post('/', async (req, res) => {
    try {
      console.log('frontend connected');
      
      const newData = await RescueTeamData({ 

        RescueTeamName: req.body.name,
        RescueTeamEmail: req.body.email,
        RescueTeamphoneNumber: req.body.phoneNumber,
        RescueTeamLocation : req.body.location,


      });
  
      
      const savedData = await newData.save();
      res.status(201).json(savedData); 
      console.log(savedData)
  
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  });



module.exports = router;