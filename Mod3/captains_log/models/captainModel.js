const mongoose = require('mongoose')

const Schema = mongoose.Schema

const logsSchema = new Schema({
    title:{type:String,required:true},
    entry:{type:String,required:true},
    shipIsBroken:{type:Boolean,default:true}
},{timestamps:true})

const Log = mongoose.model('logs',logsSchema)

module.exports = Log