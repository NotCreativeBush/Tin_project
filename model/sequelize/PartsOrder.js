const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const PartsOrder = sequelize.define('PartsOrder', {
    _id: {
        type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true
    }, partName: {
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
    }, mechanic_id: {
        type: Sequelize.INTEGER, allowNull: false,
        validate: {
            notEmpty: {
                msg: "The field is required."
            },
            isNumeric: {msg: "Should be a number"}
        }
    }, amount: {
        type: Sequelize.INTEGER, allowNull: false,
        validate: {
            notEmpty: {
                msg: "The field is required."
            },
            isNumeric: {
                msg: "The field should be a number"
            },
            min: {
                args: [1],
                msg: "This field must be between 1 and 1,000"
            },
            max: {
                args: [1000],
                msg: "This field must be between 1 and 1,000"
            },
        }
    }, status: {
        type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false,
        validate: {}
    }
});

module.exports = PartsOrder;