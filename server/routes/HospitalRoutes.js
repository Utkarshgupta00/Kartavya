const express = require('express');
const router = express.Router();
const HospitalData = require('../db/model/HospitalData');
const nodemailer = require('nodemailer');

const cors = require('cors'); // Use CORS to allow cross-origin requests if needed

router.use(express.json());
router.use(cors());

// Define a POST endpoint for sending emails
router.post('/send-emails', (req, res) => {
  const { emailAddresses, emailContent } = req.body; 
  console.log(emailAddresses);
  console.log(emailContent);
  // Configure your email transport
  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false,
    auth: {
      user: "af60b30b5f45a5",
      pass: "60e082cddcbfe9"
    },
    
  });

  // Define email options
  const mailOptions = {
    from: 'farhantest3000gmail.com',
    to: emailAddresses.join(','),
    subject: 'Disater',
    text: emailContent,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Emails sent successfully' });
    }
  });
});


router.get('/',async (req,res)=>{
    try
    {
      const data=await HospitalData.find();
      res.status(200).json(data);

    }
    catch
    {
      res.status(500).json(error.message);
    }
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