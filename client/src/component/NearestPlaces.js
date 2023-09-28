import React, { useEffect, useState } from "react";


function NearestPlaces() {
  const [nearestPlaces, setNearestPlaces] = useState([]);

  useEffect(()=>{
    fetchNearestPlaces();
  },[])

  const fetchNearestPlaces = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      console.log(latitude, longitude);
      try {
        const response = await fetch("http://localhost:3001/findNearestPlace", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ latitude, longitude }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch nearest place.");
        }

        const data = await response.json();
        const sortedPlaces = data.sort((a, b) => a.distance - b.distance);
        setNearestPlaces(sortedPlaces);
      } catch (error) {
        console.error("Error:", error);
      }
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">

      {/* <NearestLocationForm fetchNearestPlace={fetchNearestPlaces} /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {nearestPlaces && nearestPlaces.length > 0 ? (
          nearestPlaces.map((place) => (
            <div
              key={place._id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2"
            >
              <div className="px-6 py-4">
                <p className="text-xl font-bold mb-2">
                  Name: {place.RescueTeamName}
                </p>
                <p className="text-gray-700 text-base mb-2">
                  Email Id: {place.RescueTeamEmail}
                </p>
                <p className="text-gray-700 text-base mb-2">
                  Phone Number: {place.RescueTeamphoneNumber}
                </p>
                <p className="text-gray-700 text-base mb-2">
                  Address: {place.address}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-xl font-semibold text-gray-600">
            No nearest places found.
          </p>
        )}
      </div>
    </div>
  );
}

export default NearestPlaces;
