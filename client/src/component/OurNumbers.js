import React from 'react'

const OurNumbers = () => {
    const numbers_registered = [
        {
            "name" : "Hospitals",
            "numbers" : "~"+ 22,
        },
        {
            "name" : "Rescue",
            "numbers" : "~"+15,
        },
        {
            "name" : "NGO's",
            "numbers" : "~"+5,
        },
    ];
  return (
    
    
    <>
        <h1 className='my-5 ml-4 text-2xl font-bold'>Numbers Registered<span className=' ml-2 text-red-500 text-2xl animate-pulse'>LIVE</span></h1>

        <div className='grid grid-cols-3 w-[100%] gap-2 '>

            {
                numbers_registered.map((value,index)=>((
                    <div className='  text-center p-10 border-2 shadow-sm'>
                        <h1 className='font-bold text-[15px]'>{value.numbers}</h1>
                        <p>{value.name}</p>
                        
                    </div>
                
                )))
            }


        </div>
    </>
  )
}

export default OurNumbers