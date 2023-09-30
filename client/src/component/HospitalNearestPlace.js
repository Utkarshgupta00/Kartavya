import React, { useState,useEffect } from "react";


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
        const response = await fetch(
          "http://localhost:3001/findNearestHospitalPlace",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ latitude, longitude }),
          }
        );

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
      <h1 className="text-3xl font-bold mb-8">
          <span className="font-bold text-orange-500 text-5xl animate-pulse">HOSPITALS</span>  NEAR ME
      </h1>

      <div className="flex flex-wrap -m-4 mt-8">
        {nearestPlaces && nearestPlaces.length > 0 ? (
          nearestPlaces.map((place) => (
            <div
              key={place._id}
              className="p-2"
            >
              <div className="shadow-md hover:shadow-lg w-[95%]">
                <div className="px-6 py-4">
                  <p className="font-bold text-xl mb-2">
                    Name: {place.HospitalName}
                  </p>
                  <p className="text-gray-700 text-base mb-2">
                    Email Id: {place.HospitalEmail}
                  </p>
                  <p className="text-gray-700 text-base mb-2">
                    Phone Number: {place.phoneNumber}
                  </p>
                  <p className="text-gray-700 text-base mb-2">
                    Address: {place.address}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-xl font-semibold text-gray-600">
            Finding Nearest Hospital
          </p>
        )}
      </div>
    </div>
  );
}

export default NearestPlaces;
