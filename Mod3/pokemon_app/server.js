require('dotenv').config()

const express = require('express')

const connectDB = require('./config/db')
 

const app = express()

const PORT = 3000

connectDB();

const pokemon = require('./models/pokemon')
const pokemonController = require('./controllers/pokemonController')

const { createEngine } = require('jsx-view-engine')
app.set('view engine','jsx')
app.engine('jsx',createEngine())

//Load the method-override middleware
const methodOverride = require('method-override')

//a middleware that formats the form data (currently a string that looks like query params) into a object
app.use(express.urlencoded({extended:true}))


//hack into our form and give it more methods as DELETE and PUT
app.use(methodOverride('_method')) 

const pokemonRoutes = require('./routes/pokemonRoutes')

app.use('/',pokemonRoutes)

app.listen(PORT, () =>{
    console.log("Listening to the PORT "+PORT)
})

