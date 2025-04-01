const express = require('express')
// const cookieParser = require('cookie-parser')
const app = express();
const aiRoute = require('./routes/ai.route')
const jobRoute = require('./routes/job.route.js');
const dbConnection = require('./db/db.js');

dbConnection()
app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data

app.get('/',(req,res)=>{
    res.send("hey welcome!")
})

app.use('/api',jobRoute)

app.use('/ai',aiRoute)

module.exports = app