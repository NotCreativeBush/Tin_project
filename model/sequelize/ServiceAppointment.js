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
                    msg: "The field is required."
                },
                isNumeric: {msg: "Should be a number"}
            }
        }, mechanic_id: {
            type: Sequelize.INTEGER, allowNull: false,
            validate: {
                notEmpty: {
                    msg: "The field is required."
                },
                isNumeric: {msg: "Should be a number"}
            }
        }, price: {
            type: Sequelize.INTEGER, allowNull: false,
            validate: {
                notEmpty: {
                    msg: "The field is required."
                },
                isNumeric: {msg: "Should be a number"}
            }
        }, date: {
            type: Sequelize.DATEONLY, allowNull: false,
            validate: {
                notEmpty: {
                    msg: "The field is required."
                },
                isDate: {msg: "Should be a date"}
            }

        }, timeslot: {
            type: Sequelize.TIME, allowNull: false,
            validate: {
                notEmpty: {
                    msg: "This field is required."
                },
                is: {
                    args: /^(([01]?[0-9]|2[0-3]):[0-5][0-9])(:[0-5][0-9])?$/,
                    msg: "This field should be time"
                }
            }
        },
        discount: {
            type: Sequelize.INTEGER, allowNull: false,
            validate: {
                notEmpty: {
                    msg: "This field is required."
                },
                isNumeric: {
                    msg: "Should be a number"
                },
                min: {
                    args: [0],
                    msg: "This field must be between 0 and 100"
                },
                max: {
                    args: [100],
                    msg: "This field must be between 0 and 100"
                }
            }
        }
    })
;

module.exports = ServiceAppointment;