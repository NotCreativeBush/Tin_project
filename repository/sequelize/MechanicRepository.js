const Car = require("../../model/sequelize/Car");
const Mechanic = require("../../model/sequelize/Mechanic");
const ServiceAppointment = require("../../model/sequelize/ServiceAppointment");

;
const authUtil = require("../../util/authUtils");

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
        salary: newMechData.salary,
        phone: newMechData.phone,
        password: authUtil.hashPassword(newMechData.password)
    });

};

exports.updateMechanic = (mechId, mechData) => {
    const firstName = mechData.firstName;
    const lastName = mechData.lastName;
    const salary = mechData.salary;
    const phone = mechData.phone;

    const password= authUtil.hashPassword(mechData.password);
    mechData.password=password;
    return Mechanic.update(mechData, {where: {_id: mechId}});
};

exports.deleteMechanic = (mechId) => {
    return Mechanic.destroy({
        where: {_id: mechId}
    });
};

exports.findByPhone = (phone) => {
    return Mechanic.findOne({
        where: {phone: phone}
    });
};