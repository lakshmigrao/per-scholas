const Logs =(require('../models/captainModel'))


module.exports.index = async(req,res)=>{
        try {
            const LogsData = await Logs.find()
            console.log(LogsData)
            res.render('Index', { logs: LogsData })
        } catch (err) {
            console.log(err)
            res.send(err.message)
        } 
}

module.exports.show = async (req, res) => {
    try {
        const logs = await Logs.findById(req.params.id)
        console.log(logs)
        res.render('Show', { logs: logs })
    } catch (err) {
        console.log(err)
        res.send(err.message)
    }
}

module.exports.new = (req, res) => {
    res.render('New')
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