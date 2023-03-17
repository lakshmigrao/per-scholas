const express = require('express')

//Index, New, Delete, Update, Create, Edit, Show
//I.N.D.U.C.E.S.
const router = express.Router()

const pokemonController = require('../controllers/pokemonController')

router.get('/',pokemonController.welcome)

router.post('/pokemon',pokemonController.create)

router.get('/pokemon',pokemonController.index)

//Setup a "Seed" rout for repopulating our database
router.post('/pokemon/seed', pokemonController.seed)

router.delete('/pokemon/clear',pokemonController.clear)

router.delete('/pokemon/:id', pokemonController.delete)


router.get('/pokemon/new',pokemonController.new)



router.get('/pokemon/:id',pokemonController.show)

module.exports = router