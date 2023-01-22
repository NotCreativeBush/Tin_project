const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Car = sequelize.define('Car', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    manufacturer: {
        type: Sequelize.STRING, allowNull: false,
        validate:{
            notEmpty:{
                msg: "The field is required."
            },
            len:{
                args: [2,60],
                msg: "The field should contain between 2 and 60 characters."
            },
        }
    },
    model: {
        type: Sequelize.STRING, allowNull: false,
        validate:{
            notEmpty:{
                msg: "The field is required."
            },
            len:{
                args: [2,60],
                msg: "The field should contain between 2 and 60 characters."
            },
        }
    },
    plates: {
        type: Sequelize.STRING, allowNull: false,
        validate:{
            notEmpty:{
                msg: "The field is required."
            },
            len:{
                args: [2,10],
                msg: "The field should contain between 2 and 10 characters."
            },
        }
    },
    phone: {
        type: Sequelize.STRING, allowNull: false,
        validate:{
            notEmpty:{
                msg: "The field is required."
            },
            is: {
                args: /^(\+?)(\d{11}|\d{9})$/,
                msg: "Should be a phone number"
            }

        }
    },
    customerName: {
        type: Sequelize.STRING, allowNull: false,
        validate:{
            notEmpty:{
                msg: "The field is required."
            },
            len:{
                args: [2,60],
                msg: "The field should contain between 2 and 60 characters."
            },
        }
    }
});

module.exports = Car;