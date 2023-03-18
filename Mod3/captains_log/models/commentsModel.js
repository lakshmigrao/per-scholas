
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commentsSchema = new Schema ({
    username : {type : String, required : true},
    text :{ type : String, required : true},
    createdAt : Date
})

const Comment = mongoose.model('Comment',commentsSchema)

module.exports = Comment