import React, { useState } from 'react';

const DisasterGuide = () => {
  const [selectedDisaster, setSelectedDisaster] = useState('earthquake'); // Default disaster scenario

  const handleDisasterChange = (event) => {
    setSelectedDisaster(event.target.value);
  };

  const disasterInfo = {
    earthquake: {
      title: 'Earthquake Preparedness',
      steps: [
        'Stay calm and take cover.',
        'Drop to the ground to prevent being knocked over.',
        'Grab your emergency preparedness kit.',
        'Get down on the ground under a table or desk',
        'Stay clear of windows, fireplaces, and heavy furniture or appliances.',
        'Crawl next to an interior wall (away from windows) if no shelter is nearby.',
        'Stay on your knees or bent over to protect vital organs.',
        'Stay away from windows and outside doors',
        // Add more steps here
      ],
      imageUrl: 'https://img.freepik.com/free-vector/ruined-abandoned-houses-car-set_1441-3610.jpg?w=740&t=st=1695718502~exp=1695719102~hmac=f13134b9bb041f8d6449e9b15f9b39ed40b592af7e9dd35d5553f00961753109', // Replace with actual image URL
    },
    wildfire: {
      title: 'Wildfire Safety',
      steps: [
        'Evacuate immediately if instructed.',
        'Stay informed through local news and alerts.',
        'Check weather and drought conditions.',
        'Build your campfire in an open location and far from flammables.',
        "Douse your campfire until it's cold.",
        'Keep vehicles off dry grass.',
        'Regularly maintain your equipment and vehicle.',
        'Practice vehicle safety.',
        // Add more steps here
      ],
      imageUrl: 'https://img.freepik.com/free-vector/natural-disaster-forest-fire-isometric-concept-with-worried-people-running-away-from-burning-trees-near-their-house-3d-vector-illustration_1284-81223.jpg?w=740&t=st=1695718604~exp=1695719204~hmac=1631a1d100fb56db9233e6ffc96f99299e65b2a7a6cd3293f31f2a8afdfe1558', // Replace with actual image URL
    },
    blizzard: {
        title: 'Blizzard Preparedness',
        steps: [
          'Stay indoors and keep warm.',
          'Avoid unnecessary travel.',
          'Follow the storm trackers on your local news. If your local news tells you a blizzard is coming, take the warning seriously.',
          'Charge electronic devices.',
          'Stay inside and off the roads.',
          'Prepare to go without power and heat.',
          'Keep an eye on the accumulated snow on your roof.',
          // Add more steps here
        ],
        imageUrl: 'https://img.freepik.com/free-vector/isometric-cleaning-road-illustration-with-snow-clearing-equipment-vehicles-workers_1284-58069.jpg?w=740&t=st=1695719017~exp=1695719617~hmac=63feefadc8e47ce289bed41157c8b46609ee5dd8566d5bd770ec921c2303cd7b',
      },
    // Add more disaster scenarios with imageUrl
    hurricane: {
        title: 'Hurricane Preparedness',
        // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
        steps: [
          'Secure your home and belongings.',
          'Have an emergency kit ready.',
          // Add more steps here
        ],
        imageUrl :"https://img.freepik.com/free-vector/tornado-damages-house_1284-6160.jpg?size=626&ext=jpg&uid=R69217248&ga=GA1.2.1682929817.1689152509&semt=sph",
      },
      flood: {
        title: 'Flood Preparedness',
        // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
        steps: [
          'Move to higher ground if flooding is imminent.',
          'Turn off utilities if possible.',
          'Move immediately to higher ground or stay on high ground.',
          'Continue to check the media for emergency information.',
          'Follow instructions from public safety officials.',
          'If you must evacuate your home, take only essential items and bring your pets if safe to do so.',
          // Add more steps here
        ],
        imageUrl:"https://img.freepik.com/premium-vector/storm-wreaked-havoc-flooded-city_353206-419.jpg?w=900",
      },
      tornado: {
        title: 'Tornado Safety',
        // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
        steps: [
          'Find shelter quickly.',
          'If there is no shelter nearby, go to a low-lying area such as a ditch or ravine.',
          'Lie flat and face-down on low ground.',
          'Protect your head and neck with your arms. You can also wear a helmet for extra protection.',
          'Get as far away from trees and cars as you can.',
          'If possible, cover your head with a blanket, coat, or other cushion.'
          // Add more steps here
        ],
        imageUrl:"https://img.freepik.com/free-vector/tornado-damages-house_1284-6160.jpg?w=740&t=st=1695719318~exp=1695719918~hmac=f9544c9e8d608ee066a0100992e7f2256a3465743a9558a9bd7bad4d9378369b"
      },
  };

  return (
    <div className=" ">
    <div className="bg-white mt-4 p-8 rounded-lg  w-full  md:w-4/6 lg:w-3/6 xl:w-2/6">
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
          className="my-4 mx-auto rounded-lg shadow-lg max-w-full w-96 h-96"
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
