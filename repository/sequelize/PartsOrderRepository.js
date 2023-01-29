const Car = require("../../model/sequelize/Car");
const PartsOrder = require("../../model/sequelize/PartsOrder");
const ServiceAppointment = require("../../model/sequelize/ServiceAppointment");

;
const authUtil = require("../../util/authUtils");
const Mechanic = require("../../model/sequelize/Mechanic");

exports.getPartsOrders = () => {
    return PartsOrder.findAll({
        include: [

            {
                model: Mechanic,
                as: 'mechanic'
            }
        ]
    });
};

exports.getPartsOrdersForMechanic = (mechanicId) => {
    return PartsOrder.findAll({
        where: {mechanic_id: mechanicId},
        include: [

            {
                model: Mechanic,
                as: 'mechanic'
            }
        ]
    });
}

exports.getPartsOrderById = (partId) => {
    return PartsOrder.findByPk(partId, {
        include: [
            {
                model: Mechanic,
                as: 'mechanic'
            }
        ]
    });
};

exports.createPartsOrder = (newPartsData) => {
    return PartsOrder.create({
        partName: newPartsData.partName,
        mechanic_id: newPartsData.mechanic_id,
        amount: newPartsData.amount,
        status: newPartsData.status
    });

};

exports.updatePartsOrder = (partId, partData) => {

    return PartsOrder.update(partData, {where: {_id: partId}});
};

exports.changePartsOrderStatusTrue = (partId)=>{

    return PartsOrder.update({
        status: true
    }, {
        where: {_id: partId}
    });
}
exports.changePartsOrderStatusFalse = (partId)=>{

    return PartsOrder.update({
        status: false
    }, {
        where: {_id: partId}
    });
}

exports.deletePartsOrder = (partId) => {
    return PartsOrder.destroy({
        where: {_id: partId}
    });
};