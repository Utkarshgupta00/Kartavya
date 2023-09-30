import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HospitalRegistration = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    location: "",
    latitude: "",
    longitude: "",
    address: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading spinner
    try {
      const response = await fetch("http://localhost:3001/hospital-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        const data = await response.json();
        console.log("Form data submitted successfully:", data);

        setTimeout(() => {
          setIsLoading(false); // Hide loading spinner
          setShowAlert(true); // Show alert after 2 seconds
          setFormData({
            name: "",
            email: "",
            phoneNumber: "",
            location: "",
            latitude: "",
            longitude: "",
            address: "",
          });
        }, 1000);
        // You can also reset the form or redirect the user to a success page here
      } else {
        console.error("Form submission failed:", response);
        // Handle other possible response codes (e.g., server error)
        // You can display an error message to the user or take appropriate action
        setIsLoading(false);
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);
      // Handle any network errors or exceptions
      // You can display an error message to the user or take appropriate action
      setIsLoading(false); // Hide loading spinner in case of an error
    }
    // Handle form submission (e.g., send data to server)
    console.log(formData);
  };

  useEffect(() => {
    getLocation();
  }, []);

  const handleAlertClose = () => {
    setShowAlert(false); // Close the alert
    navigate("/");
  };

  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude, 1);
        // Send latitude and longitude to your Express API
        try {
          const response = await fetch("http://localhost:3001/getLocation", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ latitude, longitude }),
          });

          const data = await response.json();

          if (data.city) {
            setFormData({
              ...formData,
              latitude: latitude,
              longitude: longitude,
              location: data.city,
              address: data.address,
            });
          }
        } catch (error) {
          console.error("Error fetching city:", error);
        }
      });
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  };

  return (
    <div className="lg:grid lg:grid-cols-2 w-[100%]">
      <div className="lg:mt-10 w-[100%]  lg:order-last">
        <img
          src="image/hospital.png"
          className="w-[80%] mx-[10%] mt-10  lg:mt-20"
          alt=""
        />
      </div>

      <div className="max-w-md mx-auto lg:mt-20 mt-10 md:w-[90%] w-[90%] ">
        <h2 className="font-bold text-3xl text-center lg:mt-10 mb-20 mt-5  ">
          <span className="text-orange-500 animate-pulse text-5xl">
            Hospital{" "}
          </span>{" "}
          Registration
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Hospital Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-600"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-600"
            >
              Enter Hospital Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
              required
            />
            {/* <button
              onClick={getLocation}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
            >
              Get Location
            </button> */}
          </div>

          <div className="mb-10 mt-10 justify-center text-center">
            {/* Show the loading spinner while isLoading is true */}
            {isLoading ? (
              <div className="text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              // Show the submit button when isLoading is false
              <button
                type="submit"
                className="mb-10 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Submit Data
              </button>
            )}
            {showAlert && (
              <div className="bg-green-200 text-green-800 p-4 rounded-lg shadow-md mt-4">
                Data saved successfully!
                <button
                  className="ml-4 bg-green-500 text-white py-1 px-2 rounded-md hover:bg-green-600 transition duration-300"
                  onClick={handleAlertClose}
                >
                  OK
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default HospitalRegistration;
