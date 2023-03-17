const express = require('express')

const router = express.Router()

const captainController = require('../controllers/captainController')

router.get('/',captainController.index)
router.get('/new',captainController.new)
router.delete('/clear',captainController.clear)
router.post('/seed',captainController.seed)
router.delete('/:id',captainController.delete)
router.put('/:id',captainController.update)
router.post('/',captainController.create)
router.get('/:id/edit',captainController.edit)
router.get('/:id',captainController.show)




module.exports = router