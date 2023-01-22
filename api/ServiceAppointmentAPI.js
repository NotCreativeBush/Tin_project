const ServiceAppointmentRepository = require('../repository/sequelize/ServiceAppointmentRepository');
const e = require("express");

exports.getServiceAppointments = (req, res, next) => {
    ServiceAppointmentRepository.getServiceAppointments()
        .then(appts => {
            res.status(200).json(appts);
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getServiceAppointmentById = (req, res, next) => {
    const serviceAppointmentId = req.params.serviceAppointmentId;
    ServiceAppointmentRepository.getServiceAppointmentById(serviceAppointmentId)
        .then(serviceAppointment => {
            if (!serviceAppointment) {
                res.status(404).json({
                    message: 'Service Appointment with id:' + serviceAppointmentId + ' not found'
                });
            } else {
                res.status(200).json(serviceAppointment);
            }
        });
};

exports.createServiceAppointment = (req, res, next) => {
    ServiceAppointmentRepository.createServiceAppointment(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        })
        .catch(err => {
            if (!err.status) {
                err.status = 500;
            }
            next(err);
        });
}

exports.updateServiceAppointment = (req, res, next) => {
    const serviceAppointmentId = req.params.serviceAppointmentId;
    ServiceAppointmentRepository.updateServiceAppointment(serviceAppointmentId, req.body)
        .then(result => {
            res.status(200).json({message: 'Service Appointment updated', serviceAppointment: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deleteServiceAppointment = (req, res, next) => {
    const serviceAppointmentId = req.params.serviceAppointmentId;
    ServiceAppointmentRepository.deleteServiceAppointment(serviceAppointmentId)
        .then(result => {
            res.status(200).json({message: 'Removed Service Appointment', serviceAppointment: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};