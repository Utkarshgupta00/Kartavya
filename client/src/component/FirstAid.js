import React, { useState } from 'react';

const DisasterGuide = () => {
  const [selectedDisaster, setSelectedDisaster] = useState('earthquake'); // Default disaster scenario

  const handleDisasterChange = (event) => {
    setSelectedDisaster(event.target.value);
  };

  const disasterInfo = {
    earthquake: {
      title: 'Earthquake Preparedness',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
      steps: [
        'Stay calm and take cover.',
        'Drop to the ground to prevent being knocked over.',
        // Add more steps here
      ],
      imageUrl: 'https://img.freepik.com/free-vector/ruined-abandoned-houses-car-set_1441-3610.jpg?w=740&t=st=1695718502~exp=1695719102~hmac=f13134b9bb041f8d6449e9b15f9b39ed40b592af7e9dd35d5553f00961753109', // Replace with actual image URL
    },
    wildfire: {
      title: 'Wildfire Safety',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
      steps: [
        'Evacuate immediately if instructed.',
        'Stay informed through local news and alerts.',
        // Add more steps here
      ],
      imageUrl: 'https://img.freepik.com/free-vector/natural-disaster-forest-fire-isometric-concept-with-worried-people-running-away-from-burning-trees-near-their-house-3d-vector-illustration_1284-81223.jpg?w=740&t=st=1695718604~exp=1695719204~hmac=1631a1d100fb56db9233e6ffc96f99299e65b2a7a6cd3293f31f2a8afdfe1558', // Replace with actual image URL
    },
    blizzard: {
        title: 'Blizzard Preparedness',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
        steps: [
          'Stay indoors and keep warm.',
          'Avoid unnecessary travel.',
          // Add more steps here
        ],
        imageUrl: 'https://img.freepik.com/free-vector/isometric-cleaning-road-illustration-with-snow-clearing-equipment-vehicles-workers_1284-58069.jpg?w=740&t=st=1695719017~exp=1695719617~hmac=63feefadc8e47ce289bed41157c8b46609ee5dd8566d5bd770ec921c2303cd7b',
      },
    // Add more disaster scenarios with imageUrl
    hurricane: {
        title: 'Hurricane Preparedness',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
        steps: [
          'Secure your home and belongings.',
          'Have an emergency kit ready.',
          // Add more steps here
        ],
        imageUrl :"https://img.freepik.com/free-vector/tornado-damages-house_1284-6160.jpg?size=626&ext=jpg&uid=R69217248&ga=GA1.2.1682929817.1689152509&semt=sph",
      },
      flood: {
        title: 'Flood Preparedness',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
        steps: [
          'Move to higher ground if flooding is imminent.',
          'Turn off utilities if possible.',
          // Add more steps here
        ],
        imageUrl:"https://img.freepik.com/premium-vector/storm-wreaked-havoc-flooded-city_353206-419.jpg?w=900",
      },
      tornado: {
        title: 'Tornado Safety',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
        steps: [
          'Seek shelter in a sturdy building or storm cellar.',
          'Stay away from windows and protect your head.',
          // Add more steps here
        ],
        imageUrl:"https://img.freepik.com/free-vector/tornado-damages-house_1284-6160.jpg?w=740&t=st=1695719318~exp=1695719918~hmac=f9544c9e8d608ee066a0100992e7f2256a3465743a9558a9bd7bad4d9378369b"
      },
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
      <div className="bg-white mt-4 p-8 rounded-lg shadow-lg w-full sm:w-2/3 lg:w-1/2 xl:w-1/3">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
          Disaster Preparedness and Response Guide
        </h2>
        <label htmlFor="disasterSelect" className="block text-xl mb-2 text-gray-600">
          Select a Disaster:
        </label>
        <select
          id="disasterSelect"
          value={selectedDisaster}
          onChange={handleDisasterChange}
          className="block w-full px-4 py-2 rounded-md border-2 border-blue-500 focus:outline-none focus:ring focus:border-blue-700"
        >
          <option value="earthquake">Earthquake</option>
          <option value="wildfire">Wildfire</option>
          <option value="flood">Flood</option>
          <option value="tornado">Tornado</option>
          <option value="blizzard">Blizzard</option>
        </select>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-blue-600">{disasterInfo[selectedDisaster].title}</h3>
          <img
            src={disasterInfo[selectedDisaster].imageUrl}
            alt={selectedDisaster}
            className="my-4 mx-auto rounded-lg shadow-lg max-w-full"
          />
          <p className="text-gray-700">{disasterInfo[selectedDisaster].description}</p>
          <h4 className="mt-4 text-xl font-semibold text-blue-600">Steps to Follow:</h4>
          <ul className="list-disc list-inside text-gray-700">
            {disasterInfo[selectedDisaster].steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DisasterGuide;
