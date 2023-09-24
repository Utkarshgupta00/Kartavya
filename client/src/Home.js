import React from 'react'
import Swiper from './component/Swipe'
import OurNumbers from './component/OurNumbers'
import HospitalCard from './component/Cards/HospitalCards'


const Home = () => {
  return (
    <>
    <div className='mt-10'>
      <h1 className='text-2xl mr-20 m-5'>
        CONNECTING <span className=' font-extrabold text-orange-500 text-3xl'>HOSPITALS,</span>  RESCUE TEAMS, NGO's
      </h1>

      <div className='h-[200px]'>
        <Swiper
          link1 = "image/banner1.png"
        />           
      </div>
   


        <div className='lg:px-[100px] sm:px-3 rounded-sm'>
          <OurNumbers/>
        </div>
       
        <div className='h-40'>wh</div>
        
       
    </div>
    <HospitalCard/>



    </>
  )
}

export default Home