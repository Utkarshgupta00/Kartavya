const express = require("express");
const router = express.Router();
const RescueTeamData = require("../db/model/RescueTeamData");
const nodemailer = require("nodemailer");

const twilio = require("twilio");

const accountSid = "AC6ca673fc910f1389f25485ed6d946586";
const authToken = "7391ba0de67cbeff0a3d6dcb2c7ee8c9 ";
const client = new twilio(accountSid, authToken);

router.get("/", async (req, res) => {
  try {
    const data = await RescueTeamData.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.get("/rescue-team-emails", async (req, res) => {
  try {
    // Use the find() method to retrieve all rescue team data and project only the email field
    const data = await RescueTeamData.find({}, { RescueTeamEmail: 1, _id: 0 });

    // Extract the email field from the result and create an array of emails
    const emails = data.map((item) => item.RescueTeamEmail);

    res.status(200).json(emails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/rescue-team-number", async (req, res) => {
  try {
    // Use the find() method to retrieve all rescue team data and project only the email field
    const data = await RescueTeamData.find(
      {},
      { RescueTeamphoneNumber: 1, _id: 0 }
    );

    // Extract the email field from the result and create an array of emails
    const numbers = data.map((item) => item.RescueTeamphoneNumber);

    res.status(200).json(numbers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/rescue-team-credential", async (req, res) => {
  try {
    // Use the find() method to retrieve all rescue team data and project only the email field
    const data = await RescueTeamData.find({}, { credentail_id: 1, _id: 0 });

    // Extract the email field from the result and create an array of emails
    const credential = data.map((item) => item.credentail_id);

    res.status(200).json(credential);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/count", async (req, res) => {
  try {
    const hospitalCount = await RescueTeamData.count();
    console.log("hospital Count : " + hospitalCount);
    res.status(200).json({ count: hospitalCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    console.log("frontend connected");

    const newData = await RescueTeamData({
      RescueTeamName: req.body.name,
      RescueTeamEmail: req.body.email,
      RescueTeamphoneNumber: req.body.phoneNumber,
      RescueTeamLocation: req.body.location,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      address: req.body.address,
    });

    const savedData = await newData.save();
    res.status(201).json(savedData);
    console.log(savedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "af60b30b5f45a5",
    pass: "60e082cddcbfe9",
  },
});

router.post("/sendEmail", async (req, res) => {
  try {
    // Fetch all email addresses from the HospitalData collection
    const rescueTeamEmails = await RescueTeamData.find().distinct(
      "RescueTeamEmail"
    );

    const { subject, text } = req.body;

    const mailOptions = {
      from: "farhantest3000.com",
      to: rescueTeamEmails.join(","), // Convert the array of emails to a comma-separated string
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
  const phoneNumber = await RescueTeamData.find().distinct("phoneNumber");
  const { subject, text } = req.body;
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
