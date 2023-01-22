const express = require('express');
const router = express.Router();
const ServiceAppointmentApiController = require('../../api/ServiceAppointmentAPI');

router.get('/', ServiceAppointmentApiController.getServiceAppointments);
router.get('/:serviceAppointmentId', ServiceAppointmentApiController.getServiceAppointmentById);
router.post('/', ServiceAppointmentApiController.createServiceAppointment);
router.put('/:serviceAppointmentId', ServiceAppointmentApiController.updateServiceAppointment);
router.delete('/:serviceAppointmentId', ServiceAppointmentApiController.deleteServiceAppointment);

module.exports = router;