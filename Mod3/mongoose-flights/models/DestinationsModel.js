const mongoose = require('mongoose')

const Schema = mongoose.Schema

const destinationsSchema = new Schema({
    airport:{type:String,
        enum:['AUS','DAL','LAX','SAN','SEA']},
    arrival :{type :Date } 
})

const Destinations = mongoose.model('Destinations',destinationsSchema)


module.exports = Destinations