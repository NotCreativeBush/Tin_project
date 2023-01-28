const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Manager = sequelize.define('Manager', {
    _id: {
        type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true
    }, firstName: {
        type: Sequelize.STRING, allowNull: false,
        validate: {
            notEmpty: {
                msg: "The field is required."
            },
            len: {
                args: [2, 60],
                msg: "The field should contain between 2 and 60 characters."
            },
        }
    }, lastName: {
        type: Sequelize.STRING, allowNull: false,
        validate: {
            notEmpty: {
                msg: "The field is required."
            },
            len: {
                args: [2, 60],
                msg: "The field should contain between 2 and 60 characters."
            },
        }
    }, salary: {
        type: Sequelize.INTEGER, allowNull: false,
        validate: {
            notEmpty: {
                msg: "The field is required."
            },
            isNumeric: {
                msg: "The field should be a number"
            },
            min: {
                args: [200],
                msg: "This field must be between 200 and 1,000,000"
            },
            max: {
                args: [1000000],
                msg: "This field must be between 200 and 1,000,000"
            },
        }
    }, phone: {
        type: Sequelize.STRING, allowNull: false,
        validate: {
            notEmpty: {
                msg: "The field is required."
            },
            is: {
                args: /^(\+?)(\d{11}|\d{9})$/,
                msg: "Should be a phone number"
            }

        }

    }
    , password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty:{
                msg:"This field is required"
            }

        }
    }
});

module.exports = Manager;