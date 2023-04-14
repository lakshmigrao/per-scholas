const FoodLogs = require('../models/foodLogsModel')
const Comment = require('../models/commentsModel')
const Food = require('../models/foodLogsData')

module.exports.index=async(req,res) => {

    try{
        const foodLogData = await FoodLogs.find()
        res.render('foodLogs/Index',{foodLog : foodLogData})

    }catch(err){
        console.log(err)
        res.send(err.message)
    }
}

module.exports.new = async(req,res) => {

   res.render('foodLogs/New')

}

module.exports.create = async (req,res) => {

    if(req.body.isHealthy){
        req.body.isHealthy = true
    }else{
        req.body.isHealthy = false
    }
    try{
        await FoodLogs.create(req.body) 
       

    }catch(err){
        console.log(err)
        res.send(err.message)
    }
    res.redirect('/foodlogs')
}

module.exports.show = async (req,res) => {
    try{
        const foodLogData = await FoodLogs.findById(req.params.id).populate('comments')
        console.log(foodLogData)
        res.render('foodLogs/Show',{foodlog : foodLogData})
    }catch(err){
        console.log(err)
        res.send(err.message)
    }
}

module.exports.edit = async (req,res) => {
    try{
        const foodLogData = await FoodLogs.findById(req.params.id)
        res.render('foodLogs/Edit',{foodlog :foodLogData})
    }catch(err){
        console.log(err)
        res.send(err.message)
    }
}
module.exports.update = async (req,res) => {
    if(req.body.isHealthy){
        req.body.isHealthy = true
    }else{
        req.body.isHealthy = false
    }
    try{
        await FoodLogs.findByIdAndUpdate(req.params.id,req.body)
        res.redirect(`/foodlogs/${req.params.id}`)

    }catch(err){
        console.log(err)
        res.send(err.message)
    }
}

module.exports.delete = async (req,res) => {

    try{

        await FoodLogs.findByIdAndDelete(req.params.id)
        res.redirect('/foodlogs')
    }catch(err){
        console.log(err)
        res.send(err.message)
    }
}

module.exports.seed = async (req,res) => {

    try{
        await FoodLogs.deleteMany({})
        await FoodLogs.create(Food)
        
        res.redirect('/foodlogs')
    }catch(err){
        console.log(err)
        res.send(err.message)
    }
}

// module.exports.updateTimestamps = async (req,res)=>{
//     try{
//         let currentDate = new Date()
//         //const foodlogs = await FoodLogs.findById(req.params.id)
//         console.log(currentDate)
//         await FoodLogs.findByIdAndUpdate(req.params.id,{$set:{updatedAt : currentDate}} )
//         res.redirect(`/foodlogs`)
//     }catch(err){
//         console.log(err)
//         res.send(err.message)
//     }
// }
module.exports.clear = async (req, res) => {
    try {
        await FoodLogs.deleteMany({})
        await Comment.deleteMany({})
        res.redirect('/foodlogs')
    } catch (err) {
        console.log(err)
        res.send(err.message)
    }
}

module.exports.createComment = async(req,res) => {
    const commentOne = { 
        username : req.body.username,
        text : req.body.text,
        createdAt : Date.now()
    }
   try{
     const commentData = await Comment.create(commentOne)
     console.log("FoodLogs Comment created")
     try{
        await FoodLogs.findByIdAndUpdate(
            req.params.id,
            {$push:{comments : commentData._id}},
            {new:true, useFindAndModify : false}
        )
            res.redirect(`/foodlogs/${req.params.id}`)

     }catch(err){
        console.log(err)
    res.send(err.message)
     }
   }catch(err){
    console.log(err)
    res.send(err.message)
}
   }

//    module.exports.addComment = async(req,res) => {
//     res.render(`foodlogs/AddComment`)
//    }