const express = require('express')

const router = express.Router()

const captainController = require('../controllers/captainController')

router.get('/',captainController.index)
router.post('/',captainController.create)
router.get('/new',captainController.new)
router.get('/:id',captainController.show)
router.delete('/:id',captainController.delete)


module.exports = router