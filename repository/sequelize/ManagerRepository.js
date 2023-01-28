const Car = require("../../model/sequelize/Car");
const Manager = require("../../model/sequelize/Manager");
const ServiceAppointment = require("../../model/sequelize/ServiceAppointment");

;
const authUtil = require("../../util/authUtils");

exports.getManagers = () => {
    return Manager.findAll();
};

exports.getManagerById = (managId) => {
    return Manager.findByPk(managId, {

    });
};

exports.createManager = (newManagData) => {
    return Manager.create({
        firstName: newManagData.firstName,
        lastName: newManagData.lastName,
        salary: newManagData.salary,
        phone: newManagData.phone,
        password: authUtil.hashPassword(newManagData.password)
    });

};

exports.updateManager = (managId, managData) => {
    const firstName = managData.firstName;
    const lastName = managData.lastName;
    const salary = managData.salary;
    const phone = managData.phone;

    const password= authUtil.hashPassword(managData.password);
    managData.password=password;
    return Manager.update(managData, {where: {_id: managId}});
};

exports.deleteManager = (managId) => {
    return Manager.destroy({
        where: {_id: managId}
    });
};

exports.findByPhone = (phone) => {
    return Manager.findOne({
        where: {phone: phone}
    });
};