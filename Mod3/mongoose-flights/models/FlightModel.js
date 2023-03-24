const mongoose = require('mongoose')

const Schema = mongoose.Schema

const flightsSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNo: { type: Number, min: 10, max: 9999, required: true },
    departs: { type: Date, default: new Date(new Date().setFullYear(new Date().getFullYear() + 1)) },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],default:'SAN'},
    destinations:[
        {
            type:mongoose.Types.ObjectId,
            ref:"Destinations"
        }],
        airportsList : [{type : String}]
    }
)

const Flight = mongoose.model('flights', flightsSchema)

module.exports = Flight