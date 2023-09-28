import React from 'react'

const OurNumbers = (props) => {
    const numbers_registered = [
        {
            "name" : "Hospitals",
            "numbers" : "~"+ props.hospitalCount,
            "color" : "bg-purple-100",
            "textcolor" : "text-purple-500"

        },
        {
            "name" : "Rescue",
            "numbers" : "~"+props.rescueTeamCount,
            "color" : "bg-green-100",
            "textcolor" : "text-green-500"
        },
        {
            "name" : "NGO's",
            "numbers" : "~"+ props.ngoTeamCount,
            "color" : "bg-blue-100",
            "textcolor" : "text-blue-500"
        },
    ];
  return (
    
    
    <>
        <h1 className='my-10 ml-2 text-3xl font-bold'>Registered<span className=' ml-2 text-red-500 text-3xl animate-pulse'>LIVE :</span></h1>
<div className='px-10'>
          <div className='grid md:grid-cols-3 grid-cols-1 w-[100%] gap-2 '>

            {
                numbers_registered.map((value,index)=>((
                    <div 
                    className={`text-center p-10 mb-2 shadow-md ${value.color} ${value.textcolor}`}
                    key={index}
                    
                    >
                        <h1 className='font-bold text-[40px] lg:text-[30px]'>{value.numbers}</h1>
                        <p className='text-[25px] font-bold'>{value.name}</p>
                        
                    </div>
                
                )))
            }


        </div>  
</div>

    </>
  )
}

export default OurNumbers