import React, { useEffect, useState } from 'react';


const HospitalCard = () => {
  const [hospitalData, setHospitalData] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:3001/hospital-data') 
      .then((response) => response.json())
      .then((data) => setHospitalData(data))
      .catch((error) => console.error('Error fetching data:', error));
     
  }, []);

  return (
    <div>
      <h1>Hospital List</h1>
      {hospitalData.map((hospital) => (
        <div className='5xl'>{hospital.HospitalName}</div>
      ))}
    </div>
    
  );
};

export default HospitalCard;
