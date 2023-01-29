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
                msg: "error.emptyString"
            },
            len:{
                args: [2,60],
                msg: "error.stringLen2to60"
            },
        }
    },
    model: {
        type: Sequelize.STRING, allowNull: false,
        validate:{
            notEmpty:{
                msg: "error.emptyString"
            },
            len:{
                args: [2,60],
                msg: "error.stringLen2to60"
            },
        }
    },
    plates: {
        type: Sequelize.STRING, allowNull: false,
        validate:{
            notEmpty:{
                msg: "error.emptyString"
            },
            len:{
                args: [2,10],
                msg: "error.stringLen2to10"
            },
        }
    },
    phone: {
        type: Sequelize.STRING, allowNull: false,
        validate:{
            notEmpty:{
                msg: "error.emptyString"
            },
            is: {
                args: /^(\+?)(\d{11}|\d{9})$/,
                msg: "error.notAPhone"
            }

        }
    },
    customerName: {
        type: Sequelize.STRING, allowNull: false,
        validate:{
            notEmpty:{
                msg: "error.emptyString"
            },
            len:{
                args: [2,60],
                msg: "error.stringLen2to60"
            },
        }
    }
});

module.exports = Car;