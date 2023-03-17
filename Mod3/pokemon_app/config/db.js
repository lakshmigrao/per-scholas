const mongoose = require('mongoose')
const db = process.env.Mongo_URI

const connectDB = async() => {
    try{
        await mongoose.connect(db,{
            useNewUrlParser :true
        })
        console.log('Mongoose connected...')
    }catch(err){
        console.error(err.message)
    }
}
module.exports = connectDB ;