import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <h1 className=' font-bold font-serif m-4 text-2xl shadow-sm'>SEEKING FOR HELP <span className='text-3xl text-blue-500 animate-pulse'>?</span></h1>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 p-2 text-center'>
            <NavLink to="/hospital-cards" className='  text-blue-900  font-extrabold  rounded-lg'>
                <img src="image/hospital1.webp" className=' h-[90%] ' alt="" />
                <p >HOSPITAL</p>
            </NavLink>
            <NavLink to="/rescue-cards" className='font-extrabold text-blue-500'>
                <img src="image/rescueTeam1.png" className='sm:mt-5 md:mt-10 h-[80%]' alt="" />
                <p>RESCUE TEAM</p>
            </NavLink>
            <NavLink to="/ngo-data" className='p-10 font-extrabold '>
                <img src="image/ngo1.png" className='sm:mt-5 md:mt-10 h-[80%]' alt="" />
                <p>NGO</p>
            </NavLink>
            <NavLink to="/help" className='p-10 font-extrabold rounded-lg'>
                <img src="image/help1.png" className='sm:mt-5 md:mt-10 h-[80%]' alt="" />
                <p>HELP</p>
            </NavLink>
            
            

        </div>
    
    
    </>
  )
}

export default Contact