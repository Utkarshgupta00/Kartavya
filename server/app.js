const express = require('express');
const connection = require('./db/conn');
const cors = require('cors');
const HospitalRoutes = require('./routes/HospitalRoutes');
const RescueTeamRoutes = require('./routes/RescueTeamRoutes');


const port = process.env.PORT || 3001;

const app = express(); 

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/hospital-data',HospitalRoutes);
app.use('/rescue-team-data',RescueTeamRoutes);
app.listen(port,()=>{
    console.log(`server connected at port : ${port}`);
})