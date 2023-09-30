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
    <div className=" min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-8">
        <span className="text-orange-500 font-bold text-4xl animate-pulse font-serif ">HOSPITAL Teams</span>
        
        <h1> NEAR ME</h1>
      </h1>
      <div className="h-[300px]"><img src="image/hospital-near-me.jpg" alt="" /></div>

      <div className="flex flex-wrap mt-2">
        {nearestPlaces && nearestPlaces.length > 0 ? (
          nearestPlaces.map((place) => (
            <div
              key={place._id}
              className="w-[100%] grid sm:grid-cols-1 lg-grid-cols-4 mx-4 mb-4"
            >
              <div className=" rounded-lg overflow-hidden bg-blue-50 shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2">
                <div className="px-3 py-4">
                  
                  <p className="font-bold text-xl mb-2">
                    Name: {place.HospitalName}
                  </p>
                  <p className="text-gray-700 text-base mb-2">
                    Email Id: {place.HospitalEmail}
                  </p>
                  <p className="text-gray-700 text-base mb-2 ">
                    Phone Number: {place.phoneNumber}
                  </p>
                  <p className="text-gray-700 text-base mb-2 ">
                    Address: {place.address}
                  </p>
                </div>
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
