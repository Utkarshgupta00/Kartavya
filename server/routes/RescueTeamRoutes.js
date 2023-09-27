const express = require('express');
const router = express.Router();
const RescueTeamData = require('../db/model/RescueTeamData');
const nodemailer = require('nodemailer');

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

  const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'Gmail'
    auth: {
      user: 'codehustler404@gmail.com',
      pass: 'Llll111!!!', 
    },
  });

  router.post('/submit', async (req, res) => {
    try {
      const { description, email, expectedDate, expectedTime, targetZone } = req.body;

  
      // Filter database records by location
      // Function to find an event by location using async/await
      const findEventsByLocation = async (locationToFind) => {
        try {
          const matchingEvents = await RescueTeamData.find({ RescueTeamLocation: locationToFind }).exec();
          return matchingEvents;
        } catch (error) {
          throw error;
        }
      };  
// Usage example
(async () => {
  try {
    const matchingEvents = await findEventsByLocation(targetZone);
    console.log('Found event:', matchingEvents,targetZone);
    matchingEvents.forEach(async (matchingEvent) => {
      const mailOptions = {
        from: email,
        to: matchingEvent.email, // Use matchingEvent.email or some other field
        subject: 'Notification', 
        html: `
          <p>Description: ${description}</p>
          <p>Expected Date: ${expectedDate}</p>
          <p>Expected Time: ${expectedTime}</p>
          <p>TargetZone: ${targetZone}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log('Email Sent To',matchingEvent.email);
    });
  } catch (error) {
    console.error('err',error.message);
  }
})();
   
      // Send notification emails to matching records
      
  
      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    } 
  });
  


module.exports = router;