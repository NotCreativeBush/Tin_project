const Car = require("../../model/sequelize/Car");
const Mechanic = require("../../model/sequelize/Mechanic");
const ServiceAppointment = require("../../model/sequelize/ServiceAppointment");



exports.getMechanics = () => {
    return Mechanic.findAll();
};

exports.getMechanicById = (mechId) => {
    return Mechanic.findByPk(mechId, {
        include: [{
            model: ServiceAppointment,
            as: 'service',
            include: [{
                model: Car,
                as: 'car'
            }]
        }]
    });
};

exports.createMechanic = (newMechData) => {
    return Mechanic.create({
        firstName: newMechData.firstName,
        lastName: newMechData.lastName,
        salary: newMechData.salary
    });

};

exports.updateMechanic = (mechId, mechData) => {
    const firstName = mechData.firstName;
    const lastName = mechData.lastName;
    const salary = mechData.salary;

    return Mechanic.update(mechData, {where: {_id: mechId}});
};

exports.deleteMechanic = (mechId) => {
    return Mechanic.destroy({
        where: {_id: mechId}
    });
};