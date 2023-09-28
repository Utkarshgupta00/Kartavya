const express = require("express");
const router = express.Router();

const nominatimApiEndpoint = "https://nominatim.openstreetmap.org/reverse";

router.post("/", async (req, res) => {
  const { latitude, longitude } = req.body;
  console.log(latitude, longitude);
  try {
    const apiUrl = `${nominatimApiEndpoint}?format=json&lat=${latitude}&lon=${longitude}`;

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "User-Agent": "Disaster_Management", // Replace with your app name or identifier
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Extract the city from the response
    const city = data.address.county;
    console.log(city);
    console.log(data.address.amenity);
    const address =
      data.address.amenity !== undefined
        ? data.address.amenity
        : "" + " " + data.address.state_district + " ";
    data.address.state + " ";
    data.address.postcode;
    console.log(address);
    res.json({ city, address });
  } catch (error) {
    console.error("Error fetching city:", error);
    res.status(500).json({ error: "Error fetching city." });
  }
});

module.exports = router;
