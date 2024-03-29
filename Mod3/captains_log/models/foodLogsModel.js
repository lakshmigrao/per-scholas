const Comment = require('./commentsModel')

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const FoodLogSchema = new Schema({
    title:{type:String, required :true},
    ingredients:{type:String, required :true},
    isHealthy:{type: Boolean,default :true},
    comments : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "Comment"
        }
    ]
},
{timestamps : true})

const FoodLog = mongoose.model('foodlogs',FoodLogSchema)

module.exports = FoodLog