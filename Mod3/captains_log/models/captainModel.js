const Comment = require('./commentsModel')

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const logsSchema = new Schema({
    title:{type:String,required:true},
    entry:{type:String,required:true},
    shipIsBroken:{type:Boolean,default:true},
    comments : [
        {
            type :mongoose.Schema.Types.ObjectId,
            ref : "Comment"
        }
    ]
},{timestamps:true})

const Log = mongoose.model('logs',logsSchema)

module.exports = Log