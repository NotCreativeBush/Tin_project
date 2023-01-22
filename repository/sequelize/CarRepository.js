const Car = require("../../model/sequelize/Car");
const Mechanic = require("../../model/sequelize/Mechanic");
const ServiceAppointment = require("../../model/sequelize/ServiceAppointment");

exports.getCars = () => {
    return Car.findAll();
};

exports.getCarById = (carId) => {
    return Car.findByPk(carId, {
        include: [{
            model: ServiceAppointment,
            as: 'service',
            include: [{
                model: Mechanic,
                as: 'mechanic'
            }]
        }]
    });
};

exports.createCar = (newCarData) => {
    return Car.create({
        manufacturer: newCarData.manufacturer,
        model: newCarData.model,
        plates: newCarData.plates,
        phone: newCarData.phone,
        customerName: newCarData.customerName
    });
};

exports.updateCar = (carId, carData) => {
    const manufacturer = carData.manufacturer;
    const model = carData._model;
    const plates = carData.plates;
    const phone = carData.phone;
    const customerName = carData.customerName;
    return Car.update(carData, {where: {_id: carId}});
};

exports.deleteCar = (carId) => {
    return Car.destroy({
        where: {_id: carId}
    });
};