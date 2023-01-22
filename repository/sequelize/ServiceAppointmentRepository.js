const Car = require("../../model/sequelize/Car");
const Mechanic = require("../../model/sequelize/Mechanic");
const ServiceAppointment = require("../../model/sequelize/ServiceAppointment");
const {Sequelize} = require("sequelize");

exports.getServiceAppointments = () => {
    return ServiceAppointment.findAll({
        include: [
            {
                model: Car,
                as: 'car'
            },
            {
                model: Mechanic,
                as: 'mechanic'
            }
        ]
    });
};

exports.getServiceAppointmentById = (serviceId) => {
    return ServiceAppointment.findByPk(serviceId, {
        include: [
            {
                model: Car,
                as: 'car'
            },
            {
                model: Mechanic,
                as: 'mechanic'
            }
        ]
    });
};

exports.createServiceAppointment = (data) => {
    console.log(JSON.stringify(data));

    return ServiceAppointment.create({
        car_id: data.car_id,
        mechanic_id: data.mechanic_id,
        price: data.price,
        date: data.date,
        timeslot: data.timeslot,
        discount: data.discount
    });
};

exports.updateServiceAppointment = (serviceId, data) => {
    return ServiceAppointment.update(data, {where: {_id: serviceId}});
};

exports.deleteServiceAppointment = (serviceId) => {
    return ServiceAppointment.destroy({
        where: {_id: serviceId}
    });
};

exports.deleteManyServiceAppointments = (serviceIds) => {
    return ServiceAppointment.find({_id:{[Sequelize.Op.in]: serviceIds}});
};