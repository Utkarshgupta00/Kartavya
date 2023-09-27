import React from 'react'

const Alert = () => {
  return (
    <>

            var arr = [1,2,3,4 ]
  return (
    <>
        <h1 className='font-bold text-2xl m-4 text-red-500 font-serif' >ALERT <i className='zmdi zmdi-alert-triangle animate-bounce ml-2'></i> </h1>
        <div className='grid grid-cols-1 lg:grid-cols-3  h-[290px] overflow-x-auto'>
                        {arr.map((value,index)=>(
                          <EmergencyUpdateCard/>
                        ))}        
                        

        </div> 




    </>



    </>
  )
}

export default Alert