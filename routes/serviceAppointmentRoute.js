const express = require('express');
const router = express.Router();

const ServiceAppointmentController = require('../controllers/serviceAppointmentController');

router.get('/', ServiceAppointmentController.showServiceAppointmentList);
router.get('/add', ServiceAppointmentController.showAddServiceAppointmentForm);
router.get('/edit/:serviceAppointmentId', ServiceAppointmentController.showEditServiceAppointmentForm)
router.get('/details/:serviceAppointmentId', ServiceAppointmentController.showServiceAppointmentDetails);

router.post('/add', ServiceAppointmentController.addServiceAppointment);
router.post('/edit', ServiceAppointmentController.updateServiceAppointment);
router.get('/delete/:serviceAppointmentId', ServiceAppointmentController.deleteServiceAppointment);


module.exports = router;