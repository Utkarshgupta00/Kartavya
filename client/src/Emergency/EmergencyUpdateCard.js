import React from 'react';

const EmergencyUpdateCard = ({
  situationIcon,
  teamName,
  teamLeaderName,
  lastUpdated,
  location,
  email,
  phone,
  additionalInfo,

}) => {
  return (
    <>
          <div className=" mx-2 font-bold rounded-lg border text-[15px] text-black shadow-md mb-10  ">

                  <div className='text-2xl text-white font-bold text-center bg-red-500 mb-10 shadow-lg  p-2'><span className='mr-3 zmdi zmdi-calendar'></span>12-10 </div>
                  <h1 className='text-xl text-center mb-5'>Rescue Team Name : </h1>
                <div className='p-3'>
                    
             
                    <div>
                      
                      <p>Location : </p>

               
                    
                      <p>Number : </p>
                      <p>Email : </p>
                      <p>Additional Information : </p>
                      <p>Requirement : </p>
                    </div>
              
                
              </div>


          </div>    
    </>

  );
};

export default EmergencyUpdateCard;
