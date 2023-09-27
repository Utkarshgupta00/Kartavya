import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import RescueTeamRegistration from './component/forms/RescueTeamRegistration'
import HospitalRegistration from './component/forms/HospitalRegistration'
import AppBar from './component/AppBar'
import GiveData from './component/FilterData';
import GetEmail from './component/GetEmail';
import FirstAid from './component/FirstAid'
const App = () => {
  return (
    <>
        <AppBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/rescue-team-data" element={<RescueTeamRegistration/>}></Route>
          <Route path="/hospital-registration" element={<HospitalRegistration/>}></Route>
          <Route path='/FilterData' element={<GiveData/>}></Route>
          <Route path='/get-mail' element={<GetEmail/>}></Route>
          <Route path='/disaster-guide' element={<FirstAid/>}></Route>
        </Routes>



    </>
  )
}

export default App