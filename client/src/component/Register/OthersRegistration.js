import React from 'react'
import { NavLink } from 'react-router-dom'

const OthersRegistration = () => {
  return (
    <div>
    <h1 className='font-bold text-3xl text-blue-950 m-3 mt-5 font-serif mb-0'>HELP OTHERS</h1>
      <h2 className='font-bold m-3 font-serif text-2xl lg:text-3xl text-blue-900 mt-4 mb-10'>
        Register Your <span className='text-orange-500'>Amazing Team Here</span>
      </h2>
      <div className='grid text-blue-900 grid-cols-1 md-cols-2 lg:grid-cols-4 gap-3 p-2 text-center'>
        <NavLink to="/hospital-registration" className='px-5 py-4 font-extrabold shadow-lg  rounded-lg'>
          <img src="image/hospital.png" className=' h-[90%] ' alt="" />
          <p className=' text-2xl'>HOSPITAL TEAM</p>
        </NavLink>
        <NavLink to="/rescue" className='font-extrabold shadow-lg '>
          <img src="image/rescueTeam.png" className='px-5 py-4 sm:mt-5 md:mt-10 h-[80%]' alt="" />
          <p className=' text-2xl'>RESCUE TEAM</p>
        </NavLink>
        <NavLink to="/ngo-registration" className='px-5 py-4  shadow-lg font-extrabold '>
          <img src="image/ngo-registration1.jpg" className=' sm:mt-5 md:mt-10 h-[80%]' alt="" />
          <p className='text-xl'>NGO</p>
        </NavLink>

      </div>
    </div>
  )
}

export default OthersRegistration