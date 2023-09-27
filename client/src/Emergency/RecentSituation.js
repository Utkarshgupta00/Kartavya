import React from 'react'
import { useEffect, useState } from 'react'



const RecentSituation = () => {

  const[alertData,setAlertData] = useState([]);

  useEffect(()=>{
      fetch('http://localhost:3001/recent-alerts')
      .then((response)=> response.json())
      .then((data) => setAlertData(data))
      .catch((error)=> console.log('error fetching the data'))
  },[])




  return (
    <>
        <h1 className='font-bold text-2xl m-4 text-red-500 font-serif' >ALERT <i className='zmdi zmdi-alert-triangle animate-bounce ml-2'></i> </h1>
        <div className='grid grid-cols-1 lg:grid-cols-3'>
                        {alertData.map((value,index)=>(
                                    <div className=" mx-2 font-bold rounded-lg border text-[15px] text-black shadow-md mb-10  ">

                                    <div className='text-2xl text-white font-bold text-center bg-red-500 mb-7 shadow-lg  p-2'>{value.created_at.split('T')[0]}</div>
                                    <h1 className='text-xl text-center mb-5'>Rescue Team : {value.RescueTeamName} </h1>
                                  <div className='p-3'>
                                      
                              
                                      <div>
                                        
                                        <p>Location : {value.location} </p>

                                
                                      
                                        <p>Number : {value.Number} </p>
                                        <p>Email : {value.RescueTeamEmail} </p>
                                        <p>Additional Information : </p>
                                        <p>Requirement : {value.Requirement} </p>
                                      </div>
                                
                                  
                                </div>


                            </div>  
                        ))}        
                        

        </div> 




    </>
  )
}

export default RecentSituation