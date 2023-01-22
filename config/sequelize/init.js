const sequelize = require('./sequelize');

const Car = require('../../model/sequelize/Car');
const Mechanic = require('../../model/sequelize/Mechanic');
const ServiceAppointment = require('../../model/sequelize/ServiceAppointment');

module.exports = () => {
    Car.hasMany(ServiceAppointment, {
        as: 'service',
        foreignKey: {name: 'car_id', allowNull: false},
        constraints: true,
        onDelete: 'CASCADE'
    });
    ServiceAppointment.belongsTo(Car, {as: 'car', foreignKey: {name: 'car_id', allowNull: false}});
    Mechanic.hasMany(ServiceAppointment, {
        as: 'service',
        foreignKey: {name: 'mechanic_id', allowNull: false},
        constraints: true,
        onDelete: 'CASCADE'
    });
    ServiceAppointment.belongsTo(Mechanic, {as: 'mechanic', foreignKey: {name: 'mechanic_id', allowNull: false}});

    let allCars, allMechanics;
    return sequelize
        .sync({force: true})
        .then(() => {
            return Car.findAll();
        })
        .then(cars => {
            if (!cars || cars.length == 0) {
                return Car.bulkCreate([
                    {
                        manufacturer: 'Mazda',
                        model: 'Miata',
                        plates: 'XR2020',
                        phone: '+48533533533',
                        customerName: 'Jorge'
                    },
                    {
                        manufacturer: 'Toyota',
                        model: 'Prius',
                        plates: 'XM1331',
                        phone: '+48333333333',
                        customerName: 'Jordan'
                    },
                    {manufacturer: 'Honda', model: 'CRX', plates: 'MX2013', phone: '+48555555555', customerName: 'John'}
                ])
                    .then(() => {
                        return Car.findAll();
                    });
            } else {
                return cars;
            }
        })
        .then(cars => {
            allCars = cars;
            return Mechanic.findAll();
        })
        .then(mechs => {
            if (!mechs || mechs.length == 0) {
                return Mechanic.bulkCreate([
                    {firstName: 'Johnny', lastName: 'Oliver', salary: 1900},
                    {firstName: 'Jenny', lastName: 'Bendo', salary: 2100},
                    {firstName: 'James', lastName: 'Bundo', salary: 2500}
                ])
                    .then(() => {
                        return Mechanic.findAll();
                    });
            } else {
                return mechs;
            }
        })
        .then(mechs => {
            allMechanics = mechs;
            return ServiceAppointment.findAll();
        })
        .then(appts => {
            if (!appts || appts.length == 0) {
                return ServiceAppointment.bulkCreate([
                    {
                        car_id: allCars[0]._id,
                        mechanic_id: allMechanics[0]._id,
                        price: 100,
                        date: "2022-03-23",
                        timeslot: "11:00:00",
                        discount: 2
                    },
                    {
                        car_id: allCars[1]._id,
                        mechanic_id: allMechanics[1]._id,
                        price: 150,
                        date: "2022-04-14",
                        timeslot: "09:00:00",
                        discount: 0
                    },
                    {
                        car_id: allCars[2]._id,
                        mechanic_id: allMechanics[2]._id,
                        price: 90,
                        date: "2022-05-20",
                        timeslot: "12:30:00",
                        discount: 5
                    }
                ])
            } else {
                return appts;
            }
        });
};