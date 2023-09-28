const express = require("express");
const router = express.Router();
const RescueTeamData = require("../db/model/RescueTeamData");

router.post("/", async (req, res) => {
  const userLatitude = req.body.latitude;
  const userLongitude = req.body.longitude;
  console.log(userLatitude, userLongitude);
  try {
    // Find all places in the database
    const allPlaces = await RescueTeamData.find({});

    // Calculate distances and sort places
    const placesWithDistances = allPlaces.map((place) => {
      const distance = calculateDistance(
        userLatitude,
        userLongitude,
        place.latitude,
        place.longitude
      );
      return { ...place.toObject(), distance }; // Convert to plain JavaScript object
    });

    placesWithDistances.sort((a, b) => a.distance - b.distance);

    // Retrieve the nearest place (first in the sorted list)
    res.json(placesWithDistances);
  } catch (error) {
    console.error("Error finding nearest place:", error);
    res.status(500).json({ error: "Error finding nearest place." });
  }
});

// Function to calculate distance using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers
  return distance;
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

module.exports = router;
