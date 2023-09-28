import React from 'react'
import { NavLink } from 'react-router-dom'

const DownBar = () => {
  return (
    <>
        <div className='grid grid-cols-5 text-center justify-center w-[100%] bg-black fixed bottom-0 py-2 z-50 lg:invisible '  >
            <NavLink to="/">
                 <i class=" text-white zmdi zmdi-home text-2xl  hover:animate-bounce  "></i>
                 <p className='text-white text-[10px]'>HOME</p>
            </NavLink>
            <NavLink to="/hospital-registration">
                 <i class=" text-white zmdi zmdi-hospital text-2xl  hover:text-blue-500 hover:animate-pulse"></i>
                 <p className='text-white text-[10px]'>HOSPITAL</p>
            </NavLink>
            <NavLink to="/create-registration">
                 <i class=" text-white zmdi zmdi-account-add text-2xl  hover:text-blue-500 hover:animate-bounce"></i>
                 <p className='text-white text-[10px]'>Create</p>
            </NavLink>
            <NavLink to="/rescue-team-data">
                 <i class=" text-white zmdi zmdi-fire text-2xl  hover:text-orange-500 hover:animate-pulse"></i>
                 <p className='text-white text-[10px]'>RESCUE</p>
            </NavLink>
            <NavLink to="/help">
                 <i class=" text-white zmdi zmdi-pin-help text-2xl  hover:text-red-500 hover:animate-bounce"></i>
                 <p className='text-white text-[10px]'>HELP</p>
            </NavLink>
           

        </div>
    
    </>
  )
}

export default DownBar