const express = require('express')

const router = express.Router()

const foodLogsController = require('../controllers/foodLogs')
//!.N.D.U.C.E.S
router.get('/',foodLogsController.index)
router.get('/new',foodLogsController.new)
router.delete('/clear',foodLogsController.clear)
router.delete('/:id',foodLogsController.delete)
router.put('/:id',foodLogsController.update)
router.post('/',foodLogsController.create)
router.get('/:id/edit',foodLogsController.edit)
router.get('/:id',foodLogsController.show)
router.post('/seed',foodLogsController.seed)
//router.post('/updatetimestamps',foodLogsController.updateTimestamps)





module.exports = router