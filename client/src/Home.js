import React, { useEffect,useState } from 'react'
import Swiper from './component/Swipe'
import OurNumbers from './component/OurNumbers'
import HospitalCard from './component/Cards/HospitalCards'
import { NavLink } from 'react-router-dom'
import Contact from './component/Contact/Contact'
import Register from './component/Register/Register'
import RecentSituation from './Emergency/RecentSituation'
import Swipe from './component/Swipe'
import OthersRegistration from './component/Register/OthersRegistration'
import userEmail from './component/Register/userEmail';
import NewsletterSignup from './component/Register/userEmail'




const Home = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["HOSPITALS,", "NGO's,", "RESCUE TEAMS,"];
  const [hospitalCount,setHospitalCount] = useState(0);
  const [rescueTeamCount,setRescueTeamCount] = useState(0);
  const [ngoTeamCount,setNgoTeamCount] = useState(0);
  const [rescueEmails, setRescueEmails] = useState([]);



  
// Adding rescueEmails as a dependency
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => (prevWord + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    
    fetch('http://localhost:3001/hospital-data/count')
    .then((response) => response.json())
    .then((data) => setHospitalCount(data.count))
    .catch((error) => console.error('Error fetching hospital count:', error));
}, []);

useEffect(() => {
    
  fetch('http://localhost:3001/rescue-team-data/count')
  .then((response) => response.json())
  .then((data) => setRescueTeamCount(data.count))
  .catch((error) => console.error('Error fetching rescue team count:', error));
}, []);







useEffect(() => {
    
  fetch('http://localhost:3001/ngo-registration/count')
  .then((response) => response.json())
  .then((data) => setNgoTeamCount(data.count))
  .catch((error) => console.error('Error fetching ngo count:', error));
}, []);

  return (
    <>
    <div className=' md:grid md:grid-cols-2 lg:px-[100px] md:p-10'>

          <div className='md:p-10 my-5 sm:0'>
                <h2 className='text-3xl md:text-5xl ml-5'>Connecting</h2>
                <h1 className='text-2xl ml-5 m-2'>
                  <span className='font-extrabold font-poppins  text-blue-500 lg:text-5xl text-3xl animated-text'>{words[currentWord]}</span>
                </h1>            
          </div>



          <div className='h-[310px]'>
            <Swiper
              link1 = "image/banner1.jpg"
              link2 = "image/banner2.webp"
            />           
          </div>
      </div>

      <div className=' h-[370px] overflow-hidden p-2 lg:px-[100px]'>
        <RecentSituation/>

      </div>   
      <div className='mx-2 lg:mx-[100px] bg-blue-500 rounded-lg py-4 text-center'>
            <NavLink to="/recent-alerts" className="font-bold text-white ">
              View All

            </NavLink>          
        </div> 

      <div>


        <div className='lg:px-[100px] sm:px-3 rounded-sm'>
          <OurNumbers
              hospitalCount = {hospitalCount}
              rescueTeamCount = {rescueTeamCount}
              ngoTeamCount = {ngoTeamCount}
          />
        </div>
       
     
        
       
    </div>

    <div className=' p-2 md:px-[100px]'>
      <Contact/>
      <div className='h-10'></div>
      <NewsletterSignup/>
      <div className='h-10'></div>
      <OthersRegistration/>
    </div>


    <div className='h-[50px]'>
    <Swiper/> 
    </div>


    </>
  )
}

export default Home