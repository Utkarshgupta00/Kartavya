import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // Import phone icon

const LocationFilter = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [locationInput, setLocationInput] = useState('');

  useEffect(() => {
    // Fetch data from your backend API and populate the data state
    // You should replace this with an actual API call to your backend
    fetch('http://localhost:3001/hospital-data')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    // Apply the location filter when the filter state changes and filter is not empty
    const filtered = data.filter((item) =>
        item.location.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredData(filtered);
  }, [data, filter]);

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    setFilter(locationInput);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <div className=" my-4  w-full md:w-1/2 lg:w-3/4 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Location Filter</h1>
        <form onSubmit={handleLocationSubmit}>
          <div className=" flex justify-between mb-4">
            <input
              type="text"
              placeholder="Enter location to filter..."
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
              className="w-3/5 border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400"
            />
            <button
            type="submit"
            className="w-1/5 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Submit
          </button>
          </div>
          
        </form>
        {(
          <div className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredData.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-100 p-4 rounded-md shadow-md relative max-h-[800px] overflow-hidden"
                >
                  <img  className="rounded w-full max-h-[200px]" src='https://source.unsplash.com/random/500×400/?hospital' alt='Im'></img>
                  <h3 className="text-lg font-semibold">
                    Name: {item.HospitalName}
                  </h3>
                  <p className="text-gray-600">Location: {item.location}</p>
                  <div className='flex justify-between'>
                  <a
                    href={`tel:${item.phoneNumber}`}
                    className="text-blue-500 hover:underline mt-2 inline-block"
                  >
                    <FontAwesomeIcon icon={faPhone} className="mr-2" />
                    Contact
                  </a>
                  <a
                    href={`mailto:${item.email}`}
                    className="text-blue-500 hover:underline mt-2 inline-block"
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    Contact
                  </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {filteredData.length === 0 && (
          <p className="text-gray-500 mt-4">No data to display.</p>
        )}
      </div>
    </div>
  );
};

export default LocationFilter;
