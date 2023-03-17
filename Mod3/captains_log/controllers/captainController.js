const Logs =(require('../models/captainModel'))
const ships = require('../models/captainData')


module.exports.index = async(req,res)=>{
        try {
            const LogsData = await Logs.find()
            console.log(LogsData)
            res.render('logs/Index', { logs: LogsData })
        } catch (err) {
            console.log(err)
            res.send(err.message)
        } 
}

module.exports.show = async (req, res) => {
    try {
        const logs = await Logs.findById(req.params.id)
        console.log(logs)
        res.render('logs/Show', { logs: logs })
    } catch (err) {
        console.log(err)
        res.send(err.message)
    }
}

module.exports.new = (req, res) => {
    res.render('logs/New')
}

module.exports.create = async (req,res) => {
    if(req.body.shipIsBroken){
        req.body.shipIsBroken = true
    }else{
        req.body.shipIsBroken = false
    }
    try{
        await Logs.create(req.body)

    }catch(err){
        console.log(err)
        res.send(err.message)
    }
    res.redirect('/logs')
}

module.exports.delete = async (req, res) => {
    try {
        await Logs.findByIdAndDelete(req.params.id)
        res.redirect('/logs')
    } catch (err) {
        console.log(err)
        res.send(err.message)
    }
}

module.exports.edit = async (req, res) => {
    if (req.body.shipIsBroken) {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    try {
        const log = await Logs.findById(req.params.id)
        res.render('logs/Edit', { log: log })
    } catch (err) {
        console.log(err)
        res.send(err.message)
    }
}

module.exports.update = async (req,res)=>{
    if (req.body.shipIsBroken) {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    try{
       await Logs.findByIdAndUpdate(req.params.id,req.body)
        res.redirect(`/logs/${req.params.id}`)
    }catch (err) {
        console.log(err)
        res.send(err.message)
    }

}
module.exports.clear = async (req, res) => {
    try {
        await Logs.deleteMany({})
        res.redirect('/logs')
    } catch (err) {
        console.log(err)
        res.send(err.message)
    }
}
module.exports.seed = async (req,res) => {

    try{
        await Logs.deleteMany({})
        await Logs.create(ships)
        
        res.redirect('/logs')
    }catch(err){
        console.log(err)
        res.send(err.message)
    }
}