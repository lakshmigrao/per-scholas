const express = require('express')

const router = express.Router()

const flightController = require('../controllers/flightsController')
//I.N.D.U.C.E.S

router.get('/',flightController.index)

router.get('/new', flightController.new)

router.delete('/clear',flightController.clear)

router.post('/',flightController.create)

router.get('/:id',flightController.show)

router.post('/:id/destinations',flightController.createDestinations)
router.get('/:id/new',flightController.addDests)
router.get('/:id/edit/:desid',flightController.editDestinations)

router.put('/:id/edit/:desid',flightController.updateDestinations)



module.exports = router