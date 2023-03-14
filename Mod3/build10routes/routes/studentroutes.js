const express = require('express')

const router =express.Router()

const studentController = require('../controllers/studentcontroller')

router.get('/', studentController.index)
router.get('/home',studentController.home)
router.get('/home/locations',studentController.locations)
router.get('/home/locations/:location',studentController.location)
router.get('/home/courses',studentController.courses)
router.get('/home/courses/:course',studentController.course)
router.get('/home/genders', studentController.genders)
router.get('/home/noofbootcamps',studentController.noOfBootcamps)
router.get('/home/noofbootcamps/:nob',studentController.noOfBootcampsnob)
router.get('/:index',studentController.show)
router.get('/home/hasajob',studentController.hasAJob)

module.exports = router