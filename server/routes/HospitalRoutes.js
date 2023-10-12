const express = require("express");
const router = express.Router();
const HospitalData = require("../db/model/HospitalData");
const nodemailer = require("nodemailer");
const twilio = require("twilio");

const accountSid = "AC6ca673fc910f1389f25485ed6d946586";
const authToken = "e81497cd4f5b6098ff449c7404e5a67d ";
const client = new twilio(accountSid, authToken);

router.get("/", async (req, res) => {
  try {
    const data = await HospitalData.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.get("/count", async (req, res) => {
  try {
    const hospitalCount = await HospitalData.count();
    console.log("hospital Count : " + hospitalCount);
    res.status(200).json({ count: hospitalCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    console.log("frontend connected");

    const newData = await HospitalData({
      HospitalName: req.body.name,
      HospitalEmail: req.body.email,
      phoneNumber: req.body.phoneNumber,
      location: req.body.location,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      address: req.body.address,
    });

    // Save the document to the database
    const savedData = await newData.save();
    res.status(201).json(savedData);
    console.log(savedData); // Respond with the saved document
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle errors gracefully
  }
});

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b08904414095f8",
    pass: "c21dd66acecb45",
  },
});

router.post("/sendEmail", async (req, res) => {
  try {
    // Fetch all email addresses from the HospitalData collection
    const hospitalEmails = await HospitalData.find().distinct("HospitalEmail");

    const { subject, text } = req.body;

    const mailOptions = {
      from: "farhantest3000.com",
      to: hospitalEmails.join(","), // Convert the array of emails to a comma-separated string
      subject: subject,
      text: text,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully for hospital data.");

    res
      .status(200)
      .json({ message: "Email sent successfully for hospital data" });
  } catch (error) {
    console.error("Error sending email for hospital data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Define a route to send SMS messages
router.post("/sendSMS", async (req, res) => {
  const phoneNumber = await HospitalData.find().distinct("phoneNumber");
  const { subject, text } = req.body;
  console.log(phoneNumber);
  try {
    for (const number of phoneNumber) {
      await client.messages.create({
        from: "+12185155750", // Convert the array of emails to a comma-separated string
        to: "+91" + number,
        body: subject + "\n" + text,
      });
      console.log(`SMS sent to ${number}`);
    }

    res
      .status(200)
      .json({ message: "Sending SMS to multiple numbers completed." });
  } catch (error) {
    console.error("Error sending SMS:", error);
    res.status(500).json({ error: "Failed to send SMS." });
  }
});

module.exports = router;
