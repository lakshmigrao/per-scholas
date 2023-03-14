const express = require('express')

const app = express()

const PORT = 8085

const { createEngine }=require('jsx-view-engine')

app.set('view engine', 'jsx')

app.engine('jsx', createEngine())

const studentRoutes = require('./routes/studentroutes')

app.use('/students', studentRoutes)

app.listen(PORT, ()=>{
    console.log("Listening at the PORT "+PORT)
})