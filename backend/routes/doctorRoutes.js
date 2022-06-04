const express = require('express')
const router = express.Router()
const {
  getDoctors,
  getDoctorAppointments
} = require('../controllers/doctorController')


router.route('/').get(getDoctors)
router.route('/appointment/:id/:date').get(getDoctorAppointments)

module.exports = router
