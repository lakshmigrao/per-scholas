const mongoose = require('mongoose')
const db = process.env.MONGO_URI

//console.log(db)

const connectDB =  async() => {
    try{
        await mongoose.connect(db,{
            useNewUrlParser : true
        })
        console.log('Mongoose connected...')
    }catch(err){
        console.error(err.message)
    }
}

module.exports = connectDB ;