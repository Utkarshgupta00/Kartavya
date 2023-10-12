const express = require("express");
const router = express.Router();
const twilio = require("twilio");

const accountSid = "AC6ca673fc910f1389f25485ed6d946586";
const authToken = "7391ba0de67cbeff0a3d6dcb2c7ee8c9 ";
const client = new twilio(accountSid, authToken);

// Define a route to send SMS messages
router.post("/", async (req, res) => {
  const { numbers, message } = req.body;
  console.log(typeof numbers);
  console.log(numbers);
  try {
    for (const number of numbers) {
      await client.messages.create({
        to: "+91" + number,
        from: "+12185155750",
        body: message,
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

// Add more routes as needed...

module.exports = router;
