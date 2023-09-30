const express = require('express');
const connection = require('./db/conn');
const cors = require('cors');

const HospitalRoutes = require('./routes/HospitalRoutes');
const RescueTeamRoutes = require('./routes/RescueTeamRoutes');
const NgoRoutes = require('./routes/NgoRoutes')
const AlertRoutes = require('./routes/AlertRoute')
const locationRouter = require('./routes/locationRoutes')
const hospitalnearestplace  = require('./routes/HospitalNearestPlaceRoutes')
const rescuenearestplace = require('./routes/NearestPlaceRoutes');
const userRoute = require('./routes/UserRoute')

const port = process.env.PORT || 3001;


const app = express(); 

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/hospital-data',HospitalRoutes);
app.use('/rescue-team-data',RescueTeamRoutes);
app.use('/ngo-registration',NgoRoutes)
app.use('/recent-alerts',AlertRoutes)
app.use('/getLocation',locationRouter)
app.use('/findNearestHospitalPlace',hospitalnearestplace)
app.use('/findNearestPlace',rescuenearestplace)
app.use('/user-subscription',userRoute)


app.listen(port,()=>{
    console.log(`server connected at port : ${port}`);
})