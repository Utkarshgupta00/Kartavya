const express = require('express');
const router = express.Router();
const HospitalData = require('../db/model/HospitalData');

router.get('/',async (req,res)=>{

  try{
      const data = await HospitalData.find();
      res.status(200).json(data);
  }catch(error){
    res.status(500).json(error.message);

  };


    
})

router.post('/', async (req, res) => {
    try {
      console.log('frontend connected');
      
      const newData = await HospitalData({

        HospitalName: req.body.name,
        HospitalEmail: req.body.email,
        phoneNumber: req.body.phoneNumber,
        location : req.body.location,


      });
  
      // Save the document to the database
      const savedData = await newData.save();
      res.status(201).json(savedData); 
      console.log(savedData)// Respond with the saved document
  
    } catch (error) {
      res.status(500).json({ error: error.message }); // Handle errors gracefully
    }
  });


module.exports = router;