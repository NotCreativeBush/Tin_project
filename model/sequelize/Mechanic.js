const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Mechanic = sequelize.define('Mechanic', {
    _id: {
        type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true
    }, firstName: {
        type: Sequelize.STRING, allowNull: false,
        validate: {
            notEmpty: {
                msg: "error.emptyString"
            },
            len: {
                args: [2, 60],
                msg: "error.stringLen2to60"
            },
        }
    }, lastName: {
        type: Sequelize.STRING, allowNull: false,
        validate: {
            notEmpty: {
                msg: "error.emptyString"
            },
            len: {
                args: [2, 60],
                msg: "error.stringLen2to60"
            },
        }
    }, salary: {
        type: Sequelize.INTEGER, allowNull: false,
        validate: {
            notEmpty: {
                msg: "error.emptyString"
            },
            isNumeric: {
                msg: "error.notANumber"
            },
            min: {
                args: [200],
                msg: "error.number200to1000000"
            },
            max: {
                args: [1000000],
                msg: "error.number200to1000000"
            },
        }
    }, phone: {
        type: Sequelize.STRING, allowNull: false,
        validate: {
            notEmpty: {
                msg: "error.emptyString"
            },
            is: {
                args: /^(\+?)(\d{11}|\d{9})$/,
                msg: "error.notAPhone"
            }

        }

    }
    , password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty:{
                msg:"error.emptyString"
            },len: {
                args: [2, 60],
                msg: "error.stringLen2to60"
            }

        }
    }
});

module.exports = Mechanic;