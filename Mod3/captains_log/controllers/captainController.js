const Logs =(require('../models/captainModel'))
const ships = require('../models/captainData')
const Comment = require('../models/commentsModel')

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
        const logsData = await Logs.findById(req.params.id).populate('comments')
        console.log(logsData)
        res.render('logs/Show', { logs: logsData })
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
        await Comment.deleteMany({})
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

 module.exports.createComment = async (req,res) =>{
    const commentOne = {
        username : req.body.username,
        text : req.body.text,
        createdAt : Date.now()
    }
    try{
        const commentData = await Comment.create(commentOne)
        console.log("Logs Comment created")
        try{
            await Logs.findByIdAndUpdate(
                req.params.id,
                {$push:{comments : commentData._id}},
                {new:true, useFindAndModify : false}
            )
            res.redirect(`/logs/${req.params.id}`)
        }catch(err){
            console.log(err)
        res.send(err.message)
        }

    }catch(err){
        console.log(err)
    res.send(err.message)
    }
 }