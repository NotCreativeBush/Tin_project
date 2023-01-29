const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const PartsOrder = sequelize.define('PartsOrder', {
    _id: {
        type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true
    }, partName: {
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
    }, mechanic_id: {
        type: Sequelize.INTEGER, allowNull: false,
        validate: {
            notEmpty: {
                msg: "error.emptyString"
            },
            isNumeric: {msg: "error.notANumber"}
        }
    }, amount: {
        type: Sequelize.INTEGER, allowNull: false,
        validate: {
            notEmpty: {
                msg: "error.emptyString"
            },
            isNumeric: {
                msg: "error.notANumber"
            },
            min: {
                args: [1],
                msg: "error.number1to1000"
            },
            max: {
                args: [1000],
                msg: "error.number1to1000"
            },
        }
    }, status: {
        type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false,
        validate: {}
    }
});

module.exports = PartsOrder;