import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import RescueTeamRegistration from './component/forms/RescueTeamRegistration'
import HospitalRegistration from './component/forms/HospitalRegistration'
import AppBar from './component/AppBar'
import DownBar from './component/DownBar'
import NgoRegistration from './component/forms/NgoRegistration'
import RecentSituation from './Emergency/RecentSituation'
import AlertData from './component/forms/AlertData'

const App = () => {
  return (
    <>
    <div className='bg-white'>        
      <AppBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/rescue-team-data" element={<RescueTeamRegistration/>}></Route>
          <Route path="/hospital-registration" element={<HospitalRegistration/>}></Route>
          <Route path="/ngo-registration" element={<NgoRegistration/>}></Route>
          <Route path="/recent-alerts" element={<RecentSituation/>}></Route>
          <Route path="/alert-form" element={<AlertData/>}></Route>


        </Routes>
        <div className='h-[50px]'>




        </div>
        <DownBar/>

    </div>




    </>
  )
}

export default App