//Load mongosse
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const pokemonSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    img:{type:String,required:true
    }
})

const Pokemon = mongoose.model('pokemons',pokemonSchema)

module.exports = Pokemon
// const mongoose = require('mongoose')

// const Schema = mongoose.Schema

// const pokeSchema =  new Schema({
//     name:{type: String, required: true},
//     img:{type:String, required: true},
// })

// const Pokemon = mongoose.model('pokemon', pokeSchema)

// module.exports = Pokemon