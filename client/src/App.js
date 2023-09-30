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
import Register from './component/Register/Register';
import Help from './component/component1/Help'
import RescueTeams from './component/component1/RescueTeams'
import BlogList from './component/component1/BlogData/BlogList'
import HospitalNearestPlace from './component/HospitalNearestPlace'
import NearestPlaces from './component/NearestPlaces'
import MainRegistrationPage from './component/Register/MainRegistrationPage'


const App = () => {
  return (
    <>
    <div className='bg-white'>        
      <AppBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/rescue" element={<RescueTeamRegistration/>}></Route>
          <Route path="/hospital-registration" element={<HospitalRegistration/>}></Route>
          <Route path="/ngo-registration" element={<NgoRegistration/>}></Route>
          <Route path="/recent-alerts" element={<RecentSituation/>}></Route>
          <Route path="/alert-form" element={<AlertData/>}></Route>
          <Route path="/create-registration" element={<MainRegistrationPage/>}></Route>
          <Route path="/help" element={<Help/>}></Route>
          <Route path="/rescue-team-data" element={<RescueTeams/>}></Route>
          <Route path="/blog-post" element={<BlogList/>}></Route>
          <Route path="/hospital-cards" element={<HospitalNearestPlace/>}></Route>
          <Route path="/rescue-cards" element={<NearestPlaces/>}></Route>

          


        </Routes>
        <div className='h-[0px]'>




        </div>
        <DownBar/>

    </div>
    <div className='h-[80px]'></div>




    </>
  )
}

export default App