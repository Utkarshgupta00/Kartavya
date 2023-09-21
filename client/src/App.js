import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import RescueTeamRegistration from './component/forms/RescueTeamRegistration'
import HospitalRegistration from './component/forms/HospitalRegistration'
import AppBar from './component/AppBar'

const App = () => {
  return (
    <>
        <AppBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/rescue-team-data" element={<RescueTeamRegistration/>}></Route>
          <Route path="/hospital-registration" element={<HospitalRegistration/>}></Route>



        </Routes>



    </>
  )
}

export default App