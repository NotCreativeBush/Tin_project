const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const ServiceAppointment = sequelize.define('ServiceAppointment', {
        _id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }, car_id: {
            type: Sequelize.INTEGER, allowNull: false,
            validate: {
                notEmpty: {
                    msg: "error.emptyString"
                },
                isNumeric: {msg: "error.notANumber"}
            }
        }, mechanic_id: {
            type: Sequelize.INTEGER, allowNull: false,
            validate: {
                notEmpty: {
                    msg: "error.emptyString"
                },
                isNumeric: {msg: "error.notANumber"}
            }
        }, price: {
            type: Sequelize.INTEGER, allowNull: false,
            validate: {
                notEmpty: {
                    msg: "error.emptyString"
                },
                isNumeric: {msg: "error.notANumber"}
            }
        }, date: {
            type: Sequelize.DATEONLY, allowNull: false,
            validate: {
                notEmpty: {
                    msg: "error.emptyString"
                },
                isDate: {msg: "error.notADate"}
            }

        }, timeslot: {
            type: Sequelize.TIME, allowNull: false,
            validate: {
                notEmpty: {
                    msg: "error.emptyString"
                },
                is: {
                    args: /^(([01]?[0-9]|2[0-3]):[0-5][0-9])(:[0-5][0-9])?$/,
                    msg: "error.notATime"
                }
            }
        },
        discount: {
            type: Sequelize.INTEGER, allowNull: false,
            validate: {
                notEmpty: {
                    msg: "error.emptyString"
                },
                isNumeric: {
                    msg: "error.notANumber"
                },
                min: {
                    args: [0],
                    msg: "error.number0to100"
                },
                max: {
                    args: [100],
                    msg: "error.number0to100"
                }
            }
        }
    })
;

module.exports = ServiceAppointment;