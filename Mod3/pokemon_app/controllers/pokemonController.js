const pokemon = require('../models/pokemon')
const Pokemon = require('../models/PokemonModel')

module.exports.welcome = (req,res)=>{
    res.render('Welcome')
}

module.exports.index= async (req,res)=>{

    try{
        //await Pokemon.deleteMany({})
        //await Pokemon.create(pokemon)
        const pokemonData = await Pokemon.find()
        console.log(pokemonData)
        res.render('Index',{pokemon : pokemonData})
    }catch(err){
        console.log(err)
        res.send(err.message)
    }
    //res.render('Index',{pokemon})

}

module.exports.show=async (req,res)=>{
    try{
        const pokeData = await Pokemon.findById(req.params.id)
    res.render('Show',{singlePokemon : pokeData})
    }catch(err){
        console.log(err)
        res.send(err.message)
    }
    
}
module.exports.new = (req,res) =>{
    res.render('New')

}

module.exports.create = async (req,res) => {

    console.log('inside create')
    console.log(req.body)
    try {

        const result = await Pokemon.create(req.body)
        console.log(result)
    } catch (err) {
        console.log('error is', err)
    }


    //fruits.push(req.body)
    //res.send('data received')
    res.redirect('/pokemon')
}

module.exports.delete = async (req,res) => {
    try{
        await Pokemon.findByIdAndDelete(req.params.id)
        res.redirect('/pokemon')
    }catch(err){
        console.log(err)
        res.send(err.message)
    }

}

module.exports.seed = async (req, res) => {

    // console.log('POST /pokemon/seed')
    try {
        await Pokemon.deleteMany({})
        await Pokemon.create(pokemon)
        res.redirect('/pokemon')
    } catch (err) {
        console.log(err)
        res.send(err.message)
    }
}

module.exports.clear = async (req, res) => {

    // console.log('DELETE /pokemon/clear')
    try {
        await Pokemon.deleteMany({})
        res.redirect('/pokemon')

    } catch (err) {
        console.log(err.message)
        res.send(err.message)
    }

}