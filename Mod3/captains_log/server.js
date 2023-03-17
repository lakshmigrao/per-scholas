require('dotenv').config()

const express = require('express')

const connectDB = require('./config/db')

const app = express()

const PORT = 8080

connectDB();


const { createEngine } = require('jsx-view-engine')
const methodOverride = require('method-override')
app.set('view engine','jsx')
app.engine('jsx', createEngine())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(express.static('public'))

const captainRoutes = require('./routes/captainRoutes') 
const foodLogRoutes = require('./routes/foodLogRoutes')
app.get('/',(req,res)=>{
    res.render('Home')
})
app.use('/logs',captainRoutes)
app.use('/foodlogs',foodLogRoutes)

app.listen(PORT,()=>{
    console.log('Listening at the port : '+PORT)
})