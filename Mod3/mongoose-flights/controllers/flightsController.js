const Flights = require ('../models/FlightModel')
const Destinations = require('../models/DestinationsModel')
const Flight = require('../models/FlightModel')
let arrAirport = []
module.exports.index = async(req,res) =>{
    try{
        const flightsData = await Flights.find()
        res.render('Index',{flights : flightsData})
    }catch(err){
        console.log(err)
        res.send(err.message)
    }
    
}

module.exports.new = async(req,res) =>{
    const newFlight = new Flights();
	// Obtain the default date
	const dt = newFlight.departs;
    // console.log(dt)
	// Format the date for the value attribute of the input
	const departsDate = dt.toISOString().slice(0, 16);
    let airportsList = ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
	res.render('New', {departsDate, airport : newFlight.airport, airportsList});
}


module.exports.create = async (req,res) => {
    try{
        const flight = await Flights.create(req.body) 
        console.log(flight)
        await Flights.findByIdAndUpdate(flight._id, {
            $push: {
                airportsList: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
            }
        })
        await Flights.findByIdAndUpdate(flight._id, {
            $pull: {
                airportsList: flight.airport
            }
        })

    }catch(err){
        console.log(err)
        res.send(err.message)
    }
    res.redirect('/flights')
}
module.exports.clear = async(req,res)=>{

    try{

        await Flights.deleteMany({})
        await Destinations.deleteMany({})
        res.redirect('/flights')
    }catch(err){
        console.log(err)
        res.send(err.message)
    }
}
module.exports.show = async (req,res) => {
    try{
        const flightData = await Flights.findById(req.params.id).populate("destinations")
        res.render('Show',{flight : flightData})
    }
    catch(err){
        console.log(err)
        res.send(err.message)
    }
}

module.exports.updateDestinations = async(req,res) => {

    try{
       // console.log(req.body)
       // console.log(req.params.desid)
        const destinations = await Destinations.findByIdAndUpdate(req.params.desid,req.body)
        res.redirect(`/flights/${req.params.id}`)
    }catch(err){
        console.log(err.message)
        res.send(err.message)

    }
}

module.exports.createDestinations = async(req,res) => {
    try{
        const destinationData = await Destinations.create(req.body)
        await Flights.findByIdAndUpdate(req.params.id,{
           $push:{
                destinations : destinationData._id
           } 
        })

        //await Flights.findByIdAndUpdate(req.params.id,{airportsList : airportsList.push(destinationData.airport)})
     
        // await Flights.findByIdAndUpdate(req.params.id,{
        //     $push:{
        //          airportsList : destinationData.airport
        //     } 
        //  })
        await Flights.findByIdAndUpdate(req.params.id, {
            $pull: {
                airportsList: destinationData.airport
            }
        })
        res.redirect(`/flights/${req.params.id}`)
    }catch(err){
        console.log(err)
        res.send(err.message)
    }
}

module.exports.editDestinations = async (req,res) => {
    const destinations = await Destinations.findById(req.params.desid)
    const flight = await Flights.findById(req.params.id)
    res.render('destinations/Edit',{flightId : req.params.id, destinations,flight})

}

module.exports.addDests = async (req,res) => {
    const flight = await Flights.findById(req.params.id).populate("destinations")
    res.render('destinations/New',{flightId : req.params.id, airportsList : flight.airportsList,flight})
}